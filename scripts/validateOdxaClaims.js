const fs = require('fs');
const path = require('path');

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const unsupportedPatterns = [
    /\bO-?DXA\b[^<>]{0,160}\b(?:the\s+)?industry standard\b/i,
    /\b(?:the\s+)?industry standard\b[^<>]{0,160}\bO-?DXA\b/i,
    /\bO-?DXA\s+standards?\b/i,
    /\bO-?DXA\b[^<>]{0,80}\b(?:an?|the)\s+open standard\b/i,
    /\b(?:an?|the)\s+open standard\b[^<>]{0,80}\bO-?DXA\b/i
];

const validateOdxaClaims = outputDirectory => {
    const root = path.resolve(outputDirectory);
    const failures = [];
    let pages = 0;
    for (const file of walkHtml(root)) {
        pages++;
        const html = fs.readFileSync(file, 'utf8');
        for (const pattern of unsupportedPatterns) {
            const match = html.match(pattern);
            if (match) {
                failures.push(`${path.relative(root, file)} contains unsupported O-DXA standardization language: ${match[0].replace(/\s+/g, ' ')}`);
                break;
            }
        }
    }
    if (failures.length) throw new Error(`O-DXA claim validation failed:\n${failures.join('\n')}`);
    return {pages};
};

if (require.main === module) {
    const result = validateOdxaClaims(process.argv[2] || path.resolve(__dirname, '..', 'docs'));
    console.log(`O-DXA claims valid across ${result.pages} pages.`);
}

module.exports = {validateOdxaClaims};
