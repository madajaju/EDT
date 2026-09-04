const fs = require('fs');
const path = require('path');

const SITE_ORIGIN = 'https://embracingdigital.org';

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const canonicalPattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*\bhref=["']([^"']*)["'][^>]*>/gi;
const robotsPattern = /<meta\b(?=[^>]*\bname=["']robots["'])[^>]*\bcontent=["']([^"']*)["'][^>]*>/gi;

const validateCanonicalUrls = outputDirectory => {
    const root = path.resolve(outputDirectory);
    const failures = [];
    const owners = new Map();
    let checkedPages = 0;

    for (const file of walkHtml(root)) {
        const relative = path.relative(root, file).replace(/\\/g, '/');
        // HTML files beneath the asset tree are source/export artifacts, not pages.
        if (relative.startsWith('images/')) continue;

        const html = fs.readFileSync(file, 'utf8');
        const noindex = [...html.matchAll(robotsPattern)]
            .some(match => /(?:^|,)\s*noindex\b/i.test(match[1]));
        if (noindex) continue;

        checkedPages++;
        const canonicals = [...html.matchAll(canonicalPattern)].map(match => match[1].trim());
        if (canonicals.length !== 1) {
            failures.push(`${relative} has ${canonicals.length} canonical tags (expected exactly 1)`);
            continue;
        }

        const canonical = canonicals[0];
        let parsed;
        try {
            parsed = new URL(canonical);
        } catch {
            failures.push(`${relative} has a non-absolute canonical URL: ${canonical}`);
            continue;
        }
        if (parsed.origin !== SITE_ORIGIN) failures.push(`${relative} uses the wrong canonical origin: ${canonical}`);
        if (parsed.search || parsed.hash) failures.push(`${relative} canonical contains a query or fragment: ${canonical}`);
        if (parsed.pathname.endsWith('/index.html')) failures.push(`${relative} canonical exposes index.html: ${canonical}`);
        const fileUrl = new URL(`/${relative}`, SITE_ORIGIN);
        const expectedPath = fileUrl.pathname.endsWith('/index.html')
            ? fileUrl.pathname.slice(0, -'index.html'.length)
            : fileUrl.pathname;
        if (parsed.origin === SITE_ORIGIN && parsed.pathname !== expectedPath) {
            failures.push(`${relative} canonical points to ${parsed.pathname}; expected ${expectedPath}`);
        }

        const previous = owners.get(canonical);
        if (previous) failures.push(`${relative} duplicates the canonical used by ${previous}: ${canonical}`);
        else owners.set(canonical, relative);
    }

    if (failures.length) throw new Error(`Canonical URL validation failed:\n${failures.join('\n')}`);
    return {pages: checkedPages, canonicals: owners.size};
};

if (require.main === module) {
    const result = validateCanonicalUrls(process.argv[2] || path.resolve(__dirname, '..', 'docs'));
    console.log(`Canonical URLs valid: ${result.canonicals} unique canonicals across ${result.pages} indexable pages.`);
}

module.exports = {validateCanonicalUrls};
