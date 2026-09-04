const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validatePublicationOutput} = require('./validatePublicationOutput');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'publication-output-test-'));
try {
    const page = path.join(root, 'episode.html');
    fs.writeFileSync(page, '<main data-publication-status="published">Published episode</main>');
    assert.doesNotThrow(() => validatePublicationOutput(root));

    fs.writeFileSync(
        page,
        '<main data-publication-status="published"><section id="coming-soon">Coming Soon...</section></main>'
    );
    assert.throws(() => validatePublicationOutput(root), /published but contains Coming Soon/);
} finally {
    fs.rmSync(root, {recursive: true, force: true});
}

console.log('Publication-output validator tests passed.');
