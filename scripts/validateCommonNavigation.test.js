const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateCommonNavigation} = require('./validateCommonNavigation');

const withSite = (href, test) => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'common-nav-test-'));
    try {
        fs.writeFileSync(
            path.join(root, 'source.html'),
            `<nav id="primary-nav"><a href="${href}">Guidance</a></nav>`
        );
        test(root);
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
};

withSite('/en/shows/', root => {
    fs.mkdirSync(path.join(root, 'en', 'shows'), {recursive: true});
    fs.writeFileSync(path.join(root, 'en', 'shows', 'index.html'), 'valid');
    assert.doesNotThrow(() => validateCommonNavigation(root));
});

for (const [name, href, expected] of [
    ['relative URL', 'en/shows/index.html', /uses relative URL/],
    ['nested language path', '/en/home/en/shows/', /nested language paths/],
    ['missing destination', '/en/missing/', /points to missing/]
]) {
    withSite(href, root => {
        assert.throws(() => validateCommonNavigation(root), expected, name);
    });
}

console.log('Common navigation validator tests passed.');
