const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const {validateSiteQuality, validatePageMetaAndHeadings} = require('./validateSiteQuality');

test('Site Quality Validation Suite', async (t) => {
    await t.test('All site quality checks pass on docs/', () => {
        const docsDir = path.resolve(__dirname, '..', 'docs');
        const results = validateSiteQuality(docsDir);
        assert.ok(results);
        assert.strictEqual(results.pageMetaHeadings.length, 0);
    });

    await t.test('Page meta and headings are populated across indexable pages', () => {
        const docsDir = path.resolve(__dirname, '..', 'docs');
        const issues = validatePageMetaAndHeadings(docsDir);
        assert.strictEqual(issues.length, 0, `Issues found: ${issues.join('; ')}`);
    });
});
