const fs = require('fs');
const path = require('path');

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

function validatePublicationOutput(docsRoot) {
    const failures = [];
    let publishedPages = 0;

    for (const htmlFile of walkHtml(docsRoot)) {
        const html = fs.readFileSync(htmlFile, 'utf8');
        const statusMatch = html.match(/data-publication-status=["'](published|archived)["']/i);
        if (!statusMatch) continue;
        publishedPages++;

        const hasComingSoonComponent = /<section\b[^>]*id=["']coming-soon["']/i.test(html);
        const hasComingSoonMessage = /Coming Soon\.\.\.\s*<br\s*\/?>\s*Come back on/i.test(html);
        if (hasComingSoonComponent || hasComingSoonMessage) {
            failures.push(
                `${path.relative(docsRoot, htmlFile)} is ${statusMatch[1].toLowerCase()} but contains Coming Soon`
            );
        }
    }

    if (failures.length) {
        throw new Error(`Publication output validation failed:\n${failures.join('\n')}`);
    }

    return {publishedPages};
}

if (require.main === module) {
    const docsRoot = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
    const result = validatePublicationOutput(docsRoot);
    console.log(`Publication output valid across ${result.publishedPages} published/archived pages.`);
}

module.exports = {validatePublicationOutput};
