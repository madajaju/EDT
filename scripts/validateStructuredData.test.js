const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateStructuredData} = require('./validateStructuredData');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'structured-data-test-'));
const page = path.join(root, 'page.html');
const writeJsonLd = value => fs.writeFileSync(
    page,
    `<script type="application/ld+json">${value}</script>`
);

try {
    writeJsonLd(JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: 'https://embracingdigital.org/en/example/'
    }));
    assert.doesNotThrow(() => validateStructuredData(root));

    writeJsonLd('{"@context":"https://schema.org",}');
    assert.throws(() => validateStructuredData(root), /invalid JSON/);

    writeJsonLd(JSON.stringify({'@context': 'https://schema.org', '@type': 'WebPage', description: null}));
    assert.throws(() => validateStructuredData(root), /contains null/);

    writeJsonLd(JSON.stringify({'@context': 'https://schema.org', '@type': 'WebPage', url: '/relative/'}));
    assert.throws(() => validateStructuredData(root), /not an absolute URL/);

    writeJsonLd(JSON.stringify({'@context': 'https://schema.org', '@type': 'WebPage', name: ''}));
    assert.throws(() => validateStructuredData(root), /empty placeholder/);
} finally {
    fs.rmSync(root, {recursive: true, force: true});
}

console.log('Structured-data validator tests passed.');
