const fs = require('fs');
const path = require('path');

const SITE_ORIGIN = 'https://embracingdigital.org';
const canonicalPattern = /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*\bhref=["']([^"']+)["'][^>]*>/i;
const robotsMetaPattern = /<meta\b(?=[^>]*\bname=["']robots["'])[^>]*\bcontent=["']([^"']*)["'][^>]*>/gi;

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const validateCrawlerFiles = outputDirectory => {
    const root = path.resolve(outputDirectory);
    const failures = [];
    const robotsFile = path.join(root, 'robots.txt');
    const sitemapFile = path.join(root, 'sitemap.xml');
    if (!fs.existsSync(robotsFile)) failures.push('robots.txt is missing');
    if (!fs.existsSync(sitemapFile)) failures.push('sitemap.xml is missing');
    if (failures.length) throw new Error(`Crawler-file validation failed:\n${failures.join('\n')}`);

    const robots = fs.readFileSync(robotsFile, 'utf8');
    if (!/^User-agent:\s*\*/mi.test(robots)) failures.push('robots.txt has no default User-agent rule');
    if (!/^Allow:\s*\/\s*$/mi.test(robots)) failures.push('robots.txt does not allow the public site');
    if (!/^Sitemap:\s*https:\/\/embracingdigital\.org\/sitemap\.xml\s*$/mi.test(robots)) {
        failures.push('robots.txt has no canonical Sitemap declaration');
    }
    for (const publicPath of ['/en/digital-transformation/', '/en/shows/', '/en/episodes/', '/en/briefs/']) {
        const escaped = publicPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (new RegExp(`^Disallow:\\s*${escaped}`, 'mi').test(robots)) failures.push(`robots.txt blocks ${publicPath}`);
    }

    const searchFile = path.join(root, 'en', 'search.html');
    if (fs.existsSync(searchFile)) {
        const searchHtml = fs.readFileSync(searchFile, 'utf8');
        const searchDirectives = [...searchHtml.matchAll(robotsMetaPattern)]
            .flatMap(match => match[1].toLowerCase().split(',').map(value => value.trim()));
        if (!searchDirectives.includes('noindex') || !searchDirectives.includes('follow')) {
            failures.push('en/search.html must use robots directives noindex,follow');
        }
    }

    const expected = new Set();
    for (const file of walkHtml(root)) {
        const relative = path.relative(root, file).replace(/\\/g, '/');
        if (relative.startsWith('images/')) continue;
        const html = fs.readFileSync(file, 'utf8');
        const noindex = [...html.matchAll(robotsMetaPattern)].some(match => /(?:^|,)\s*noindex\b/i.test(match[1]));
        if (noindex) continue;
        const canonical = html.match(canonicalPattern)?.[1];
        if (canonical) expected.add(canonical);
    }

    const xml = fs.readFileSync(sitemapFile, 'utf8');
    if (!/<urlset\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/.test(xml)) {
        failures.push('sitemap.xml has an invalid or missing urlset namespace');
    }
    const listed = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].trim());
    const listedSet = new Set(listed);
    if (listed.length !== listedSet.size) failures.push(`sitemap.xml contains ${listed.length - listedSet.size} duplicate URLs`);
    for (const url of listed) {
        let parsed;
        try { parsed = new URL(url); } catch { failures.push(`sitemap.xml contains a malformed URL: ${url}`); continue; }
        if (parsed.origin !== SITE_ORIGIN) failures.push(`sitemap.xml contains a non-canonical host: ${url}`);
        if (parsed.search || parsed.hash || parsed.pathname.endsWith('/index.html')) failures.push(`sitemap.xml contains a URL variant: ${url}`);
        if (!expected.has(url)) failures.push(`sitemap.xml contains a non-indexable or unknown URL: ${url}`);
    }
    for (const url of expected) if (!listedSet.has(url)) failures.push(`sitemap.xml is missing canonical page: ${url}`);

    if (failures.length) throw new Error(`Crawler-file validation failed:\n${failures.join('\n')}`);
    return {sitemapUrls: listed.length, indexablePages: expected.size};
};

if (require.main === module) {
    const result = validateCrawlerFiles(process.argv[2] || path.resolve(__dirname, '..', 'docs'));
    console.log(`Crawler files valid: ${result.sitemapUrls} sitemap URLs for ${result.indexablePages} indexable pages.`);
}

module.exports = {validateCrawlerFiles};
