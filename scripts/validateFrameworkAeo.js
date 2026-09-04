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

const stripHtml = html => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const extractAeoIntroduction = html => {
    // Check hero-subtitle, pillar-hero-highlight, brief-container p, or transformation-container p
    const match = html.match(/<p\b[^>]*class=["'][^"']*(?:hero-subtitle|pillar-hero-highlight)[^"']*["'][^>]*>([\s\S]*?)<\/p>/i)
        || html.match(/<section\b[^>]*class=["'][^"']*(?:brief-container|transformation-container)[^"']*["'][^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    if (!match) return null;
    return stripHtml(match[1]);
};

const countWords = text => text.trim().split(/\s+/).filter(Boolean).length;

const validateFrameworkAeo = outputDirectory => {
    const output = path.resolve(outputDirectory);
    const failures = [];
    const urls = [hubs.gear];
    for (const [group, members] of Object.entries(groups)) {
        urls.push(hubs[group], ...members.map(member => `${hubs[group]}${member}/`));
    }

    const validated = [];

    for (const url of urls) {
        const file = pageFile(output, url);
        if (!fs.existsSync(file)) {
            failures.push(`${url} is missing`);
            continue;
        }
        const html = fs.readFileSync(file, 'utf8');
        
        // 1. Check for H1
        const h1Match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
        if (!h1Match) {
            failures.push(`${url} is missing an <h1> heading`);
        }

        // 2. Extract AEO intro
        const intro = extractAeoIntroduction(html);
        if (!intro) {
            failures.push(`${url} is missing an AEO-friendly introduction paragraph`);
            continue;
        }

        // 3. Word count check (40-80 words target)
        const wordCount = countWords(intro);
        if (wordCount < 40 || wordCount > 80) {
            failures.push(`${url} AEO introduction has ${wordCount} words (expected between 40 and 80 words). Intro: "${intro}"`);
        }

        // 4. Markdown leakage check in intro
        if (/\*\*|__|::|\b(?:ifdef|endif)\b/.test(intro)) {
            failures.push(`${url} AEO introduction contains leaked markdown or asciidoc formatting: "${intro}"`);
        }

        validated.push({url, wordCount, intro});
    }

    if (failures.length) {
        throw new Error(`Framework AEO validation failed:\n${failures.join('\n')}`);
    }

    return {pages: urls.length, validated};
};

if (require.main === module) {
    const result = validateFrameworkAeo(process.argv[2] || path.resolve(__dirname, '..', 'docs'));
    console.log(`Framework AEO introductions valid across ${result.pages} canonical framework pages.`);
}

module.exports = {validateFrameworkAeo, extractAeoIntroduction, countWords};
