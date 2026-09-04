const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateCrawlerFiles} = require('./validateCrawlerFiles');

const makeFixture = ({robots, sitemap}) => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'crawler-files-'));
    fs.mkdirSync(path.join(root, 'en', 'page'), {recursive: true});
    fs.writeFileSync(path.join(root, 'en', 'page', 'index.html'), '<link rel="canonical" href="https://embracingdigital.org/en/page/">');
    fs.writeFileSync(path.join(root, 'en', 'draft.html'), '<meta name="robots" content="noindex,follow">');
    fs.writeFileSync(path.join(root, 'en', 'search.html'), '<meta name="robots" content="noindex, follow">');
    fs.writeFileSync(path.join(root, 'robots.txt'), robots);
    fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
    return root;
};

const goodRobots = 'User-agent: *\nAllow: /\nSitemap: https://embracingdigital.org/sitemap.xml\n';
const goodSitemap = '<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://embracingdigital.org/en/page/</loc></url></urlset>';
let root = makeFixture({robots: goodRobots, sitemap: goodSitemap});
try {
    assert.deepStrictEqual(validateCrawlerFiles(root), {sitemapUrls: 1, indexablePages: 1});
} finally { fs.rmSync(root, {recursive: true, force: true}); }

for (const [robots, sitemap, expected] of [
    ['User-agent: *\nAllow: /\n', goodSitemap, /Sitemap declaration/],
    [goodRobots, goodSitemap.replace('/en/page/', '/en/page/index.html'), /URL variant/],
    [goodRobots, goodSitemap.replace('<url>', '<url><loc>https://embracingdigital.org/en/missing/</loc></url><url>'), /unknown URL/]
]) {
    root = makeFixture({robots, sitemap});
    try { assert.throws(() => validateCrawlerFiles(root), expected); }
    finally { fs.rmSync(root, {recursive: true, force: true}); }
}

root = makeFixture({robots: goodRobots, sitemap: goodSitemap});
try {
    fs.writeFileSync(path.join(root, 'en', 'search.html'), '<meta name="robots" content="index,follow">');
    assert.throws(() => validateCrawlerFiles(root), /search\.html must use robots directives noindex,follow/);
} finally { fs.rmSync(root, {recursive: true, force: true}); }
console.log('Crawler-file validator tests passed.');
