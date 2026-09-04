const test = require('node:test');
const assert = require('node:assert');
const { auditEdtwTitles } = require('./auditEdtwTitles.js');
const { deriveTopicFromHtml } = require('./updateEdtwTitles.js');

test('EDTW Titles Audit and Validation', async (t) => {
    const report = auditEdtwTitles();

    await t.test('Successfully audits EDTW episode pages', () => {
        assert.ok(report.total > 0, 'Should find EDTW episodes');
        assert.strictEqual(report.total, report.episodes.length);
    });

    await t.test('All EDTW episodes have descriptive titles', () => {
        assert.strictEqual(report.genericCount, 0, 'Zero generic titles should remain after remediation');
        assert.strictEqual(report.descriptiveCount, report.total, 'All episodes must have descriptive titles');
    });

    await t.test('Episode titles follow the preferred naming standard (<Topic> | EDTW #<num>)', () => {
        for (const ep of report.episodes) {
            assert.ok(
                ep.pageTitle.includes(`EDTW #${ep.number}`) || ep.rawEpisodeTitle.includes(`EDTW #${ep.number}`) || ep.pageTitle.includes(`EDW-${ep.number}`),
                `Episode ${ep.number} title should include standard EDTW badge: ${ep.pageTitle}`
            );
        }
    });

    await t.test('deriveTopicFromHtml extracts descriptive topics accurately', () => {
        const mockHtml = `
            <html><head><title>Embracing Digital This Week</title></head>
            <body>
                <section class="brief-top-stories">
                    <article class="top-story">
                        <h3>Breakthrough Quantum Computing and AI Acceleration</h3>
                    </article>
                </section>
            </body></html>
        `;
        const topic = deriveTopicFromHtml(mockHtml, '999');
        assert.strictEqual(topic, 'Breakthrough Quantum Computing and AI Acceleration');
    });
});
