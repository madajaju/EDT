const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateMarkupLeakage} = require('./validateMarkupLeakage');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'markup-leakage-test-'));
const page = path.join(root, 'article.html');

const expectLeak = source => {
    fs.writeFileSync(page, `<main><p>${source}</p></main>`);
    assert.throws(() => validateMarkupLeakage(root), /Visible source markup/);
};

try {
    for (const directive of [
        ':doctype: article',
        ':icons: font',
        ':sectnums:',
        ':imagesdir: images',
        'ifdef::backend-html5[]',
        'endif::[]',
        'include::partial.adoc[]',
        '=== The Core Concept'
    ]) expectLeak(directive);

    fs.writeFileSync(page, `
        <main><p>Legitimate article content.</p></main>
        <pre><code>:doctype: article\n=== Example heading</code></pre>
        <section hidden>include::hidden.adoc[]</section>
        <script>const comparison = '===';</script>
    `);
    assert.doesNotThrow(() => validateMarkupLeakage(root));
} finally {
    fs.rmSync(root, {recursive: true, force: true});
}

console.log('Markup-leakage validator tests passed.');
