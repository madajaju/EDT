const fs = require('fs');
const path = require('path');

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const scriptPattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
// ListItem.item may legitimately be a root-relative reference. Canonical entity
// and media URLs must be absolute so consumers can use them directly.
const absoluteUrlProperties = new Set([
    '@id', 'url', 'contentUrl', 'embedUrl', 'thumbnailUrl', 'sameAs'
]);

const collectTypes = (value, types = new Set()) => {
    if (Array.isArray(value)) value.forEach(item => collectTypes(item, types));
    else if (value && typeof value === 'object') {
        if (typeof value['@type'] === 'string') types.add(value['@type']);
        Object.values(value).forEach(child => collectTypes(child, types));
    }
    return types;
};

const inspectValue = (value, location, failures) => {
    if (value === null || value === undefined) {
        failures.push(`${location} contains ${String(value)}`);
        return;
    }
    if (Array.isArray(value)) {
        value.forEach((item, index) => inspectValue(item, `${location}[${index}]`, failures));
        return;
    }
    if (typeof value !== 'object') return;

    for (const [key, child] of Object.entries(value)) {
        const childLocation = `${location}.${key}`;
        if (typeof child === 'string' && /^(?:null|undefined)$/i.test(child.trim())) {
            failures.push(`${childLocation} contains placeholder value ${child}`);
        }
        if (typeof child === 'string' && child.trim() === '') {
            failures.push(`${childLocation} contains an empty placeholder value`);
        }
        if (absoluteUrlProperties.has(key)) {
            const urls = Array.isArray(child) ? child : [child];
            urls.forEach((url, index) => {
                if (typeof url !== 'string' || !/^https?:\/\//i.test(url)) {
                    failures.push(`${childLocation}${urls.length > 1 ? `[${index}]` : ''} is not an absolute URL`);
                }
            });
        }
        inspectValue(child, childLocation, failures);
    }
};

function validateStructuredData(docsRoot) {
    const failures = [];
    let pagesChecked = 0;
    let blocksChecked = 0;

    for (const htmlFile of walkHtml(docsRoot)) {
        pagesChecked++;
        const html = fs.readFileSync(htmlFile, 'utf8');
        const relativeFile = path.relative(docsRoot, htmlFile).replace(/\\/g, '/');
        const pageTypes = new Set();
        let pageBlock = 0;
        let match;
        while ((match = scriptPattern.exec(html)) !== null) {
            blocksChecked++;
            pageBlock++;
            const label = `${relativeFile} JSON-LD block ${pageBlock}`;
            let data;
            try {
                data = JSON.parse(match[1].trim());
            } catch (error) {
                failures.push(`${label} is invalid JSON: ${error.message}`);
                continue;
            }
            inspectValue(data, label, failures);
            collectTypes(data, pageTypes);
        }

        const requiredTypes = [];
        if (/\/episodes\/edt-\d+\/index\.html$/i.test(relativeFile)) {
            requiredTypes.push(['PodcastEpisode']);
        } else if (/\/briefs\/edw-\d+\/index\.html$/i.test(relativeFile)) {
            requiredTypes.push(['NewsArticle', 'Article']);
        } else if (/\/digital-transformation\/articles\/[^/]+\/index\.html$/i.test(relativeFile)) {
            requiredTypes.push(['Article', 'NewsArticle', 'TechArticle']);
        } else if (/\/digital-transformation\/whitepapers\/[^/]+\/index\.html$/i.test(relativeFile)) {
            requiredTypes.push(['TechArticle', 'ScholarlyArticle']);
        } else if (/\/digital-transformation\/(?:forge|dimensions)(?:\/[^/]+)?\/index\.html$/i.test(relativeFile)) {
            requiredTypes.push(['TechArticle']);
        }
        requiredTypes.forEach(allowed => {
            if (!allowed.some(type => pageTypes.has(type))) {
                failures.push(`${relativeFile} requires one of these schema types: ${allowed.join(', ')}`);
            }
        });

        if (/data-publication-status=["'](?:draft|scheduled)["']/i.test(html) && pageTypes.has('PodcastEpisode')) {
            failures.push(`${relativeFile} describes unpublished content as PodcastEpisode`);
        }
    }

    if (failures.length) {
        throw new Error(`Structured-data validation failed:\n${failures.join('\n')}`);
    }
    return {pagesChecked, blocksChecked};
}

if (require.main === module) {
    const docsRoot = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
    const result = validateStructuredData(docsRoot);
    console.log(
        `Structured data valid: ${result.blocksChecked} JSON-LD blocks across ${result.pagesChecked} pages.`
    );
}

module.exports = {validateStructuredData};
