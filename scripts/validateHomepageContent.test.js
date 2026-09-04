const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateHomepageFile} = require('./validateHomepageContent');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const card = (day, index) => `
<article class="week-card">
  <h3>${day}</h3>
  <div class="week-show">Content type ${index}</div>
  <div class="week-title"><a href="/en/item-${index}/">Title ${index}</a></div>
  <p class="week-summary">Description ${index}</p>
</article>`;
const validHomepage = days.map(card).join('\n');

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'homepage-content-test-'));
try {
    const fixture = path.join(tempRoot, 'index.html');
    fs.writeFileSync(fixture, validHomepage);
    assert.doesNotThrow(() => validateHomepageFile(fixture));

    fs.writeFileSync(fixture, validHomepage.replace('Title 1', 'Loading...'));
    assert.throws(() => validateHomepageFile(fixture), /Loading/);

    fs.writeFileSync(fixture, validHomepage.replace('href="/en/item-2/"', 'href="en/item-2/"'));
    assert.throws(() => validateHomepageFile(fixture), /non-canonical/);

    fs.writeFileSync(fixture, validHomepage.replace(days.map(card)[4], ''));
    assert.throws(() => validateHomepageFile(fixture), /expected 5 weekday cards/);
} finally {
    fs.rmSync(tempRoot, {recursive: true, force: true});
}

console.log('Homepage static-content validator tests passed.');
