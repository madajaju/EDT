const fs = require('fs');
const path = require('path');

const ROOT = '/en/digital-transformation/';
const hubs = {
    gear: ROOT,
    odxa: `${ROOT}odxa/`,
    forge: `${ROOT}forge/`,
    dimensions: `${ROOT}dimensions/`,
    pillars: `${ROOT}pillars/`
};
const groups = {
    odxa: ['strategic', 'organizational', 'process', 'digital', 'physical'],
    forge: ['find', 'observe', 'reconcile', 'ground', 'enhance'],
    dimensions: ['people', 'process', 'policy', 'technology'],
    pillars: ['ai', 'data', 'cybersecurity', 'computing', 'edge', 'communications']
};

const pageFile = (output, url) => path.join(output, url.replace(/^\//, ''), 'index.html');
const normalizeHref = href => {
    try {
        const parsed = new URL(href, 'https://embracingdigital.org');
        if (parsed.origin !== 'https://embracingdigital.org') return null;
        let pathname = parsed.pathname.replace(/\/index\.html$/, '/');
        if (!path.extname(pathname) && !pathname.endsWith('/')) pathname += '/';
        return pathname;
    } catch { return null; }
};
const mainLinks = html => {
    const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || html;
    return new Set([...main.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)]
        .map(match => normalizeHref(match[1])).filter(Boolean));
};

const validateFrameworkArchitecture = outputDirectory => {
    const output = path.resolve(outputDirectory);
    const failures = [];
    const urls = [hubs.gear];
    for (const [group, members] of Object.entries(groups)) {
        urls.push(hubs[group], ...members.map(member => `${hubs[group]}${member}/`));
    }

    for (const url of urls) {
        const file = pageFile(output, url);
        if (!fs.existsSync(file)) { failures.push(`${url} is missing`); continue; }
        const links = mainLinks(fs.readFileSync(file, 'utf8'));
        for (const [name, hub] of Object.entries(hubs)) {
            if (!links.has(hub)) failures.push(`${url} has no contextual link to the ${name} hub (${hub})`);
        }
        if (![...links].some(link => /^\/en\/(?:episodes|lectures)\//.test(link) ||
            /^\/en\/digital-transformation\/(?:articles|whitepapers)\//.test(link))) {
            failures.push(`${url} has no contextual link to supporting content`);
        }
    }

    for (const [group, members] of Object.entries(groups)) {
        const links = mainLinks(fs.readFileSync(pageFile(output, hubs[group]), 'utf8'));
        for (const member of members) {
            const memberUrl = `${hubs[group]}${member}/`;
            if (!links.has(memberUrl)) failures.push(`${hubs[group]} does not link to ${memberUrl}`);
        }
    }

    if (failures.length) throw new Error(`Framework architecture validation failed:\n${failures.join('\n')}`);
    return {pages: urls.length, relationships: Object.values(groups).flat().length};
};

if (require.main === module) {
    const result = validateFrameworkArchitecture(process.argv[2] || path.resolve(__dirname, '..', 'docs'));
    console.log(`Framework architecture valid across ${result.pages} pages and ${result.relationships} core relationships.`);
}

module.exports = {validateFrameworkArchitecture};
