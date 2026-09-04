const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { validateInternalLinks, resolveInternalDestination } = require('./validateInternalLinks');

// Helper to create fixture site
function createTestSite(files) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'internal-links-test-'));
    for (const [relPath, content] of Object.entries(files)) {
        const fullPath = path.join(root, relPath);
        fs.mkdirSync(path.dirname(fullPath), { recursive: true });
        fs.writeFileSync(fullPath, content, 'utf8');
    }
    return root;
}

// 1. Test resolveInternalDestination unit logic
{
    const fixtureRoot = path.resolve('/tmp/site');
    const sourceFile = path.join(fixtureRoot, 'en', 'home', 'index.html');

    // External URLs
    const ext = resolveInternalDestination(fixtureRoot, sourceFile, 'https://github.com/test');
    assert.strictEqual(ext.isExternal, true);
    assert.strictEqual(ext.isIgnored, true);

    // Mailto / Tel
    const mail = resolveInternalDestination(fixtureRoot, sourceFile, 'mailto:info@example.com');
    assert.strictEqual(mail.isIgnored, true);

    // Bare hash
    const hash = resolveInternalDestination(fixtureRoot, sourceFile, '#');
    assert.strictEqual(hash.isIgnored, true);

    // Same-page fragment
    const inPage = resolveInternalDestination(fixtureRoot, sourceFile, '#overview');
    assert.strictEqual(inPage.isIgnored, false);
    assert.strictEqual(inPage.targetPath, sourceFile);
    assert.strictEqual(inPage.fragment, 'overview');

    // Root-relative
    const rootRel = resolveInternalDestination(fixtureRoot, sourceFile, '/en/shows/');
    assert.strictEqual(rootRel.isIgnored, false);
    assert.strictEqual(rootRel.pathname, '/en/shows/');
    assert.strictEqual(rootRel.targetPath, path.join(fixtureRoot, 'en', 'shows', 'index.html'));

    // Relative
    const rel = resolveInternalDestination(fixtureRoot, sourceFile, 'subpage/index.html');
    assert.strictEqual(rel.isIgnored, false);
    assert.strictEqual(rel.targetPath, path.join(fixtureRoot, 'en', 'home', 'subpage', 'index.html'));
}

// 2. Test valid site with varied link formats
{
    const root = createTestSite({
        'en/index.html': `
            <!doctype html>
            <html><body>
                <a href="/en/about.html">About</a>
                <a href="/en/shows/">Shows</a>
                <a href="https://embracingdigital.org/en/about.html#contact">Contact</a>
                <a href="/en/search.html?query=digital">Search</a>
                <a href="https://example.com/external" target="_blank">External</a>
                <a href="mailto:darren@example.com">Email</a>
                <a href="#">Back to top</a>
            </body></html>
        `,
        'en/about.html': `
            <!doctype html>
            <html><body>
                <h2 id="contact">Contact Us</h2>
                <a href="/en/">Home</a>
                <a href="#contact">In-page anchor</a>
            </body></html>
        `,
        'en/shows/index.html': `
            <!doctype html>
            <html><body>
                <a href="../about.html">About relative</a>
                <a href="/en/shows/">Self directory</a>
            </body></html>
        `,
        'en/search.html': `
            <!doctype html>
            <html><body>Search page</body></html>
        `
    });

    try {
        const result = validateInternalLinks({ docsRoot: root, throwOnError: true });
        assert.strictEqual(result.brokenLinks.length, 0);
        assert.ok(result.totalLinks >= 10);
        assert.ok(result.internalLinks >= 8);
        assert.strictEqual(result.pagesChecked, 4);
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
}

// 3. Test detection of broken target files with diagnostic formatting
{
    const root = createTestSite({
        'en/home/index.html': `
            <!doctype html>
            <html><body>
                <a href="en/shows/index.html">Relative broken show link</a>
                <a href="/en/nonexistent.html">Missing root page</a>
            </body></html>
        `,
        'en/shows/index.html': `
            <!doctype html>
            <html><body>Shows</body></html>
        `
    });

    try {
        const result = validateInternalLinks({ docsRoot: root, throwOnError: false });
        assert.strictEqual(result.brokenLinks.length, 2);

        // First broken link: relative link resolving incorrectly
        const brokenRelative = result.brokenLinks.find(b => b.link === 'en/shows/index.html');
        assert.ok(brokenRelative, 'Finds broken relative link');
        assert.strictEqual(brokenRelative.source, 'en/home/index.html');
        assert.strictEqual(brokenRelative.resolved, 'en/home/en/shows/index.html');
        assert.strictEqual(brokenRelative.likelyDestination, 'en/shows/index.html');
        assert.ok(brokenRelative.error.includes('Target file does not exist'));

        // Second broken link: missing file
        const brokenMissing = result.brokenLinks.find(b => b.link === '/en/nonexistent.html');
        assert.ok(brokenMissing, 'Finds missing file link');
        assert.strictEqual(brokenMissing.source, 'en/home/index.html');
        assert.strictEqual(brokenMissing.resolved, 'en/nonexistent.html');

        // Test throwOnError
        assert.throws(
            () => validateInternalLinks({ docsRoot: root, throwOnError: true }),
            /Internal link validation failed with 2 broken link\(s\)/
        );
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
}

// 4. Test detection of missing anchor fragments
{
    const root = createTestSite({
        'en/page1.html': `
            <!doctype html>
            <html><body>
                <a href="#nonexistent-anchor">Missing local anchor</a>
                <a href="/en/page2.html#missing-section">Missing remote anchor</a>
                <a href="/en/page2.html#valid-section">Valid remote anchor</a>
            </body></html>
        `,
        'en/page2.html': `
            <!doctype html>
            <html><body>
                <section id="valid-section">Valid</section>
            </body></html>
        `
    });

    try {
        const result = validateInternalLinks({ docsRoot: root, checkAnchors: true, throwOnError: false });
        assert.strictEqual(result.brokenLinks.length, 2);

        const brokenLocal = result.brokenLinks.find(b => b.link === '#nonexistent-anchor');
        assert.ok(brokenLocal);
        assert.ok(brokenLocal.error.includes('Anchor fragment #nonexistent-anchor not found'));

        const brokenRemote = result.brokenLinks.find(b => b.link === '/en/page2.html#missing-section');
        assert.ok(brokenRemote);
        assert.ok(brokenRemote.error.includes('Anchor fragment #missing-section not found'));
    } finally {
        fs.rmSync(root, { recursive: true, force: true });
    }
}

console.log('Internal link validator tests passed successfully.');
