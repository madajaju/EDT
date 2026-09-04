const test = require('node:test');
const assert = require('node:assert');
const { validateShowsModel, SHOWS_CONFIG } = require('./validateShowsModel.js');

test('Shows Editorial Model and Differentiation Validation', async (t) => {
    const result = validateShowsModel();

    await t.test('All 3 shows and overview configurations are validated with zero errors', () => {
        if (!result.valid) {
            console.error('Validation errors:', result.errors);
        }
        assert.strictEqual(result.valid, true, `Shows validation failed with errors: ${result.errors.join('; ')}`);
        assert.strictEqual(result.errors.length, 0);
    });

    await t.test('Configured shows contain the three canonical series with distinct editorial roles', () => {
        assert.strictEqual(SHOWS_CONFIG.shows.length, 3);
        const roles = SHOWS_CONFIG.shows.map(s => s.role);
        assert.ok(roles.includes('The Canon'));
        assert.ok(roles.includes('The Evidence'));
        assert.ok(roles.includes('The Synthesis'));
    });
});
