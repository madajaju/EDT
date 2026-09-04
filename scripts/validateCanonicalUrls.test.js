const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateCanonicalUrls} = require('./validateCanonicalUrls');

const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'canonical-validator-'));
const write = (name, head) => {
    const file = path.join(fixture, name);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, `<!doctype html><html><head>${head}</head><body></body></html>`);
};

try {
    write('en/valid/index.html', '<link rel="canonical" href="https://embracingdigital.org/en/valid/">');
    write('excluded.html', '<meta name="robots" content="noindex,follow">');
    assert.deepStrictEqual(validateCanonicalUrls(fixture), {pages: 1, canonicals: 1});

    const invalidCases = [
        ['missing.html', '', /0 canonical tags/],
        ['duplicate.html', '<link rel="canonical" href="https://embracingdigital.org/a/"><link rel="canonical" href="https://embracingdigital.org/b/">', /2 canonical tags/],
        ['relative.html', '<link rel="canonical" href="/relative/">', /non-absolute/],
        ['index.html', '<link rel="canonical" href="https://embracingdigital.org/en/page/index.html">', /exposes index\.html/],
        ['tracked.html', '<link rel="canonical" href="https://embracingdigital.org/en/page/?utm_source=test">', /query or fragment/]
    ];
    for (const [name, tag, expected] of invalidCases) {
        const isolated = fs.mkdtempSync(path.join(os.tmpdir(), 'canonical-case-'));
        fs.writeFileSync(path.join(isolated, name), `<!doctype html><head>${tag}</head>`);
        assert.throws(() => validateCanonicalUrls(isolated), expected);
        fs.rmSync(isolated, {recursive: true, force: true});
    }
    console.log('Canonical URL validator tests passed.');
} finally {
    fs.rmSync(fixture, {recursive: true, force: true});
}
