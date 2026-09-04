const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {validateFrameworkArchitecture} = require('./validateFrameworkArchitecture');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'framework-architecture-'));
const base = '/en/digital-transformation/';
const hubs = ['', 'odxa/', 'forge/', 'dimensions/', 'pillars/'];
const members = {
    'odxa/': ['strategic', 'organizational', 'process', 'digital', 'physical'],
    'forge/': ['find', 'observe', 'reconcile', 'ground', 'enhance'],
    'dimensions/': ['people', 'process', 'policy', 'technology'],
    'pillars/': ['ai', 'data', 'cybersecurity', 'computing', 'edge', 'communications']
};
const common = hubs.map(hub => `<a href="${base}${hub}">Hub</a>`).join('') + '<a href="/en/episodes/">Evidence</a>';
try {
    for (const hub of hubs) {
        const urls = [hub, ...(members[hub] || []).map(member => `${hub}${member}/`)];
        for (const suffix of urls) {
            const directory = path.join(root, base, suffix);
            fs.mkdirSync(directory, {recursive: true});
            const memberLinks = (members[hub] || []).map(member => `<a href="${base}${hub}${member}/">Member</a>`).join('');
            fs.writeFileSync(path.join(directory, 'index.html'), `<main>${common}${memberLinks}</main>`);
        }
    }
    assert.deepStrictEqual(validateFrameworkArchitecture(root), {pages: 25, relationships: 20});
    fs.writeFileSync(path.join(root, 'en', 'digital-transformation', 'forge', 'index.html'), '<main></main>');
    assert.throws(() => validateFrameworkArchitecture(root), /no contextual link/);
    console.log('Framework architecture validator tests passed.');
} finally {
    fs.rmSync(root, {recursive: true, force: true});
}
