const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateOdxaClaims} = require('./validateOdxaClaims');

const validateText = text => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'odxa-claims-'));
    try {
        fs.writeFileSync(path.join(root, 'page.html'), text);
        return validateOdxaClaims(root);
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
};

assert.deepStrictEqual(
    validateText('<p>O-DXA is an open architectural framework for coordinating transformation.</p>'),
    {pages: 1}
);
for (const claim of [
    'O-DXA is the industry standard for transformation.',
    'Adopt ODXA standards across the enterprise.',
    'The open standard O-DXA aligns five domains.'
]) assert.throws(() => validateText(`<p>${claim}</p>`), /unsupported O-DXA standardization language/);

console.log('O-DXA claim validator tests passed.');
