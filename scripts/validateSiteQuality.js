const path = require('path');
const fs = require('fs');
const {validateCommonNavigation} = require('./validateCommonNavigation');
const {validateHomepageContent} = require('./validateHomepageContent');
const {validatePublicationOutput} = require('./validatePublicationOutput');
const {validateMarkupLeakage} = require('./validateMarkupLeakage');
const {validateStructuredData} = require('./validateStructuredData');
const {validateCanonicalUrls} = require('./validateCanonicalUrls');
const {validateCrawlerFiles} = require('./validateCrawlerFiles');
const {validateOdxaClaims} = require('./validateOdxaClaims');
const {validateFrameworkArchitecture} = require('./validateFrameworkArchitecture');
const {validateFrameworkAeo} = require('./validateFrameworkAeo');
const {validateShowsModel} = require('./validateShowsModel');
const {validateInternalLinks} = require('./validateInternalLinks');

const walkHtml = directory => {
    if (!fs.existsSync(directory)) return [];
    return fs.readdirSync(directory, {withFileTypes: true})
        .flatMap(entry => {
            const entryPath = path.join(directory, entry.name);
            if (entry.isDirectory()) return walkHtml(entryPath);
            return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
        });
};

function validatePageMetaAndHeadings(outputDir = path.resolve(__dirname, '..', 'docs')) {
    const enDir = path.join(outputDir, 'en');
    const htmlFiles = walkHtml(enDir);

    const issues = [];
    for (const fullPath of htmlFiles) {
        const file = path.relative(outputDir, fullPath).replace(/\\/g, '/');
        const html = fs.readFileSync(fullPath, 'utf8');

        // Check if page is marked noindex or is a redirect stub/utility
        const isNoIndex = /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*noindex/i.test(html);
        if (isNoIndex || file.includes('survey/') || file.includes('odxa_viewer.html')) {
            continue;
        }

        // Check <title>
        const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
        if (!titleMatch || !titleMatch[1].trim()) {
            issues.push(`${file} is missing <title> tag`);
        }

        // Check meta description on important indexable pages
        const descMatch = html.match(/<meta\b(?=[^>]*\bname=["']description["'])[^>]*\bcontent=["']([^"']*)["'][^>]*>/i);
        if (!descMatch || !descMatch[1].trim()) {
            issues.push(`${file} is missing meta description`);
        }

        // Check H1 on indexable body pages
        const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
        if (h1Matches.length === 0) {
            issues.push(`${file} is missing <h1> tag`);
        }
    }

    return issues;
}

function validateSiteQuality(outputDir = path.resolve(__dirname, '..', 'docs')) {
    const results = {
        commonNav: null,
        homepageContent: null,
        publicationOutput: null,
        markupLeakage: null,
        structuredData: null,
        canonicalUrls: null,
        crawlerFiles: null,
        odxaClaims: null,
        frameworkArchitecture: null,
        frameworkAeo: null,
        showsModel: null,
        internalLinks: null,
        pageMetaHeadings: []
    };

    console.log('Running comprehensive Site Quality build checks on:', outputDir);

    results.commonNav = validateCommonNavigation(outputDir);
    results.homepageContent = validateHomepageContent(outputDir);
    results.publicationOutput = validatePublicationOutput(outputDir);
    results.markupLeakage = validateMarkupLeakage(outputDir);
    results.structuredData = validateStructuredData(outputDir);
    results.canonicalUrls = validateCanonicalUrls(outputDir);
    results.odxaClaims = validateOdxaClaims(outputDir);
    results.frameworkArchitecture = validateFrameworkArchitecture(outputDir);
    results.frameworkAeo = validateFrameworkAeo(outputDir);
    results.showsModel = validateShowsModel(outputDir);
    results.crawlerFiles = validateCrawlerFiles(outputDir);
    results.internalLinks = validateInternalLinks(outputDir);
    results.pageMetaHeadings = validatePageMetaAndHeadings(outputDir);

    if (results.pageMetaHeadings.length > 0) {
        throw new Error(`Page meta/heading validation failures:\n${results.pageMetaHeadings.join('\n')}`);
    }

    console.log('All Site Quality build checks passed successfully!');
    return results;
}

if (require.main === module) {
    try {
        validateSiteQuality();
    } catch (err) {
        console.error('Site Quality Validation Error:', err.message);
        process.exit(1);
    }
}

module.exports = {
    validateSiteQuality,
    validatePageMetaAndHeadings
};
