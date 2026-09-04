const fs = require('fs');
const path = require('path');

const GLOBAL_NAV_LABELS = new Set([
    'Home',
    'Guidance',
    'Learn',
    'Community',
    'About',
    'Search'
]);

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const stripMarkup = value => value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const destinationFor = (docsRoot, href) => {
    const pathname = href.split(/[?#]/, 1)[0];
    const relativePath = decodeURIComponent(pathname).replace(/^\/+/, '');
    return pathname.endsWith('/')
        ? path.join(docsRoot, relativePath, 'index.html')
        : path.join(docsRoot, relativePath);
};

function validateCommonNavigation(docsRoot) {
    const failures = [];
    let navigationCount = 0;

    for (const htmlFile of walkHtml(docsRoot)) {
        const html = fs.readFileSync(htmlFile, 'utf8');
        const nav = html.match(/<nav\s+id=["']primary-nav["'][\s\S]*?<\/nav>/i);
        if (!nav) continue;
        navigationCount++;

        const anchors = nav[0].matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi);
        for (const anchor of anchors) {
            const href = anchor[1].trim();
            const label = stripMarkup(anchor[2]);
            if (!GLOBAL_NAV_LABELS.has(label)) continue;

            if (!href.startsWith('/')) {
                failures.push(`${path.relative(docsRoot, htmlFile)}: ${label} uses relative URL ${href}`);
                continue;
            }
            if (/\/(?:[a-z]{2})\/[^?#]*\/(?:[a-z]{2})\//i.test(href)) {
                failures.push(`${path.relative(docsRoot, htmlFile)}: ${label} contains nested language paths ${href}`);
                continue;
            }

            const destination = destinationFor(docsRoot, href);
            if (!fs.existsSync(destination)) {
                failures.push(
                    `${path.relative(docsRoot, htmlFile)}: ${label} points to missing ${href} ` +
                    `(expected ${path.relative(docsRoot, destination)})`
                );
            }
        }
    }

    if (failures.length) {
        throw new Error(`Common navigation validation failed:\n${failures.join('\n')}`);
    }

    return {pagesChecked: navigationCount};
}

if (require.main === module) {
    const docsRoot = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
    const result = validateCommonNavigation(docsRoot);
    console.log(`Common navigation valid across ${result.pagesChecked} pages.`);
}

module.exports = {validateCommonNavigation};
