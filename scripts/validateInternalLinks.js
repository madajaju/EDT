const fs = require('fs');
const path = require('path');

const SITE_ORIGINS = new Set([
    'https://embracingdigital.org',
    'http://embracingdigital.org'
]);

const IGNORE_SCHEMES = /^(?:mailto:|tel:|javascript:|data:|sms:|callto:|whatsapp:)/i;

const walkHtml = directory => {
    if (!fs.existsSync(directory)) return [];
    return fs.readdirSync(directory, {withFileTypes: true})
        .flatMap(entry => {
            const entryPath = path.join(directory, entry.name);
            if (entry.isDirectory()) return walkHtml(entryPath);
            return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
        });
};

function extractAnchors(html) {
    const ids = new Set();
    // Match id="..." or name="..."
    const matches = html.matchAll(/\b(?:id|name)=["']([^"']+)["']/gi);
    for (const m of matches) {
        ids.add(m[1]);
    }
    return ids;
}

function resolveInternalDestination(docsRoot, sourceFile, href) {
    let cleanHref = href.trim();
    if (!cleanHref || cleanHref === '#') {
        return { isIgnored: true };
    }

    if (IGNORE_SCHEMES.test(cleanHref)) {
        return { isIgnored: true };
    }

    // Check for absolute URL
    try {
        const parsed = new URL(cleanHref);
        if (SITE_ORIGINS.has(parsed.origin)) {
            // Internal absolute URL
            cleanHref = parsed.pathname + parsed.search + parsed.hash;
        } else {
            // External URL
            return { isExternal: true, isIgnored: true };
        }
    } catch {
        // Not a standard absolute URL with origin
        if (/^[a-z]+:\/\//i.test(cleanHref)) {
            return { isExternal: true, isIgnored: true };
        }
    }

    // Split pathname, query, and fragment
    const hashIndex = cleanHref.indexOf('#');
    let fragment = null;
    let pathAndQuery = cleanHref;
    if (hashIndex !== -1) {
        fragment = cleanHref.slice(hashIndex + 1);
        pathAndQuery = cleanHref.slice(0, hashIndex);
    }

    const queryIndex = pathAndQuery.indexOf('?');
    let query = null;
    let pathname = pathAndQuery;
    if (queryIndex !== -1) {
        query = pathAndQuery.slice(queryIndex + 1);
        pathname = pathAndQuery.slice(0, queryIndex);
    }

    let targetPath = null;
    let isRootRelative = false;

    if (!pathname && fragment !== null) {
        // In-page anchor link
        targetPath = sourceFile;
    } else if (pathname.startsWith('/')) {
        isRootRelative = true;
        const decoded = decodeURIComponent(pathname).replace(/^\/+/, '');
        const candidate = path.join(docsRoot, decoded);
        if (pathname.endsWith('/')) {
            targetPath = path.join(candidate, 'index.html');
        } else if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            targetPath = candidate;
        } else if (fs.existsSync(path.join(candidate, 'index.html'))) {
            targetPath = path.join(candidate, 'index.html');
        } else {
            // Guess .html or index.html if not found
            targetPath = candidate;
        }
    } else {
        // Relative link
        const baseDir = path.dirname(sourceFile);
        const decoded = decodeURIComponent(pathname);
        const candidate = path.resolve(baseDir, decoded);
        if (pathname.endsWith('/')) {
            targetPath = path.join(candidate, 'index.html');
        } else if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            targetPath = candidate;
        } else if (fs.existsSync(path.join(candidate, 'index.html'))) {
            targetPath = path.join(candidate, 'index.html');
        } else {
            targetPath = candidate;
        }
    }

    // Determine likely destination if broken
    let likelyDestination = null;
    if (!fs.existsSync(targetPath)) {
        if (!isRootRelative && pathname) {
            const rootCandidate = path.join(docsRoot, decodeURIComponent(pathname).replace(/^\/+/, ''));
            if (fs.existsSync(rootCandidate)) {
                likelyDestination = rootCandidate;
            } else if (fs.existsSync(path.join(rootCandidate, 'index.html'))) {
                likelyDestination = path.join(rootCandidate, 'index.html');
            } else {
                const enCandidate = path.join(docsRoot, 'en', decodeURIComponent(pathname).replace(/^\/+/, ''));
                if (fs.existsSync(enCandidate)) {
                    likelyDestination = enCandidate;
                } else if (fs.existsSync(path.join(enCandidate, 'index.html'))) {
                    likelyDestination = path.join(enCandidate, 'index.html');
                }
            }
        }
    }

    return {
        isIgnored: false,
        isExternal: false,
        rawHref: href,
        cleanHref,
        pathname,
        query,
        fragment,
        targetPath,
        likelyDestination
    };
}

function validateInternalLinks(options = {}) {
    const docsRoot = path.resolve(options.docsRoot || path.join(__dirname, '..', 'docs'));
    const checkAnchors = options.checkAnchors !== false;
    const throwOnError = options.throwOnError !== false;

    if (!fs.existsSync(docsRoot)) {
        throw new Error(`Docs root directory does not exist: ${docsRoot}`);
    }

    const htmlFiles = walkHtml(docsRoot);
    const brokenLinks = [];
    let totalLinksChecked = 0;
    let totalInternalLinks = 0;

    const fileAnchorCache = new Map();
    const getCachedAnchors = filePath => {
        if (fileAnchorCache.has(filePath)) return fileAnchorCache.get(filePath);
        if (!fs.existsSync(filePath)) return null;
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const anchors = extractAnchors(content);
            fileAnchorCache.set(filePath, anchors);
            return anchors;
        } catch {
            return null;
        }
    };

    for (const sourceFile of htmlFiles) {
        const relativeSrc = path.relative(docsRoot, sourceFile).replace(/\\/g, '/');
        // HTML files beneath the asset tree are source/export artifacts, not pages.
        if (relativeSrc.startsWith('images/')) continue;

        let content;
        try {
            content = fs.readFileSync(sourceFile, 'utf8');
        } catch (err) {
            brokenLinks.push({
                source: relativeSrc,
                link: '',
                resolved: relativeSrc,
                error: `Unable to read source file: ${err.message}`
            });
            continue;
        }

        // Strip scripts and styles before extracting markup links
        const cleanContent = content
            .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
            .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
            .replace(/<template\b[^>]*>[\s\S]*?<\/template>/gi, '');

        // Extract href from <a>, <area>
        const hrefMatches = cleanContent.matchAll(/<(?:a|area)\b[^>]*href=["']([^"']*)["'][^>]*>/gi);

        for (const match of hrefMatches) {
            totalLinksChecked++;
            const rawHref = match[1];
            const dest = resolveInternalDestination(docsRoot, sourceFile, rawHref);

            if (dest.isIgnored) continue;
            totalInternalLinks++;

            const relativeResolved = path.relative(docsRoot, dest.targetPath).replace(/\\/g, '/');
            const relativeLikely = dest.likelyDestination
                ? path.relative(docsRoot, dest.likelyDestination).replace(/\\/g, '/')
                : null;

            if (!fs.existsSync(dest.targetPath)) {
                brokenLinks.push({
                    source: relativeSrc,
                    link: rawHref,
                    resolved: relativeResolved,
                    likelyDestination: relativeLikely,
                    error: 'Target file does not exist'
                });
                continue;
            }

            // Check anchor fragments if target is an HTML file
            if (checkAnchors && dest.fragment && (dest.targetPath.endsWith('.html') || dest.targetPath.endsWith('.htm'))) {
                const targetAnchors = getCachedAnchors(dest.targetPath);
                const decodedFragment = decodeURIComponent(dest.fragment);
                if (targetAnchors && !targetAnchors.has(dest.fragment) && !targetAnchors.has(decodedFragment)) {
                    brokenLinks.push({
                        source: relativeSrc,
                        link: rawHref,
                        resolved: `${relativeResolved}#${dest.fragment}`,
                        likelyDestination: relativeLikely,
                        error: `Anchor fragment #${dest.fragment} not found in destination`
                    });
                }
            }
        }
    }

    if (brokenLinks.length > 0) {
        const formattedErrors = brokenLinks.map(item => {
            let msg = `BROKEN LINK\n\nSource:\n${item.source}\n\nLink:\n${item.link}\n\nResolved:\n${item.resolved}`;
            if (item.likelyDestination) {
                msg += `\n\nExpected likely destination:\n${item.likelyDestination}`;
            }
            if (item.error) {
                msg += `\n\nReason:\n${item.error}`;
            }
            return msg;
        }).join('\n\n' + '='.repeat(40) + '\n\n');

        if (throwOnError) {
            throw new Error(`Internal link validation failed with ${brokenLinks.length} broken link(s):\n\n${formattedErrors}`);
        }
    }

    return {
        pagesChecked: htmlFiles.length,
        totalLinks: totalLinksChecked,
        internalLinks: totalInternalLinks,
        brokenLinks
    };
}

if (require.main === module) {
    try {
        const docsPath = process.argv[2] || path.resolve(__dirname, '..', 'docs');
        const res = validateInternalLinks({ docsRoot: docsPath, throwOnError: false });
        if (res.brokenLinks.length > 0) {
            console.error(`Found ${res.brokenLinks.length} broken internal link(s) across ${res.pagesChecked} pages:`);
            res.brokenLinks.forEach(b => {
                console.error(`\nBROKEN LINK\nSource: ${b.source}\nLink: ${b.link}\nResolved: ${b.resolved}\nReason: ${b.error}`);
                if (b.likelyDestination) {
                    console.error(`Expected likely destination: ${b.likelyDestination}`);
                }
            });
            process.exit(1);
        } else {
            console.log(`Internal links valid: checked ${res.internalLinks} internal links (${res.totalLinks} total) across ${res.pagesChecked} pages. 0 broken links.`);
        }
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = { validateInternalLinks, resolveInternalDestination };
