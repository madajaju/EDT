const assert = require('assert');
const {resolvePublicationStatus, isPubliclyAvailable} = require('./publicationState');

const today = new Date('2026-09-03T12:00:00-07:00');
const cases = [
    ['future scheduled content', {status: 'scheduled', publishDate: '2026-09-04'}, 'scheduled', false],
    ["today's scheduled content", {status: 'scheduled', publishDate: '2026-09-03'}, 'published', true],
    ['past published content', {status: 'published', publishDate: '2026-08-20'}, 'published', true],
    ['explicitly published future content', {status: 'published', publishDate: '2026-09-10'}, 'published', true],
    ['past draft content', {status: 'draft', publishDate: '2026-08-20'}, 'draft', false],
    ['past scheduled content', {status: 'scheduled', publishDate: '2026-08-20'}, 'published', true],
    ['archived content', {status: 'archived', publishDate: '2025-01-01'}, 'archived', true],
    ['legacy past content', {releaseDate: '2026-08-20'}, 'published', true],
    ['legacy future content', {releaseDate: '2026-09-10'}, 'scheduled', false]
];

for (const [name, content, expectedStatus, expectedAvailability] of cases) {
    const actualStatus = resolvePublicationStatus(content, today);
    assert.strictEqual(actualStatus, expectedStatus, `${name} status`);
    assert.strictEqual(isPubliclyAvailable(actualStatus), expectedAvailability, `${name} availability`);
}

console.log(`Publication-state tests passed: ${cases.length}/${cases.length}.`);
