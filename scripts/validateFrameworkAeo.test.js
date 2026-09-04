const assert = require('assert');
const path = require('path');
const {validateFrameworkAeo, extractAeoIntroduction, countWords} = require('./validateFrameworkAeo');

const docsDirectory = path.resolve(__dirname, '..', 'docs');
const result = validateFrameworkAeo(docsDirectory);

assert.strictEqual(result.pages, 25, 'Expected 25 framework pages to be validated');
assert.strictEqual(result.validated.length, 25, 'Expected all 25 pages to pass AEO validation');

for (const item of result.validated) {
    assert(item.wordCount >= 40 && item.wordCount <= 80, `Expected word count for ${item.url} to be 40-80, got ${item.wordCount}`);
    assert(!/\*\*|__|::/.test(item.intro), `Intro for ${item.url} contains leaked formatting`);
}

console.log('Framework AEO introduction tests passed: 25/25.');
