const fs = require('fs');
const path = require('path');

const LEAK_PATTERNS = [
    /(?:^|\s):(?:doctype|icons|sectnums|imagesdir):(?:\s|$)/i,
    /(?:^|\s)(?:ifdef::|endif::|include::)/i,
    /^\s*===(?:\s+\S.*)?$/
];

const walkHtml = directory => fs.readdirSync(directory, {withFileTypes: true})
    .flatMap(entry => {
        const entryPath = path.join(directory, entry.name);
        if (entry.isDirectory()) return walkHtml(entryPath);
        return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    });

const decodeEntities = text => text
    .replace(/&#(\d+);/g, (_, value) => String.fromCodePoint(Number(value)))
    .replace(/&#x([\da-f]+);/gi, (_, value) => String.fromCodePoint(parseInt(value, 16)))
    .replace(/&colon;/gi, ':')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&')
    .replace(/&nbsp;/gi, ' ');

function visibleText(html) {
    let content = html.replace(/<!--[\s\S]*?-->/g, ' ');
    for (const tag of ['head', 'script', 'style', 'noscript', 'template', 'pre', 'code']) {
        content = content.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, 'gi'), ' ');
    }
    // Generated hidden UI is not public-facing text. Repeating this handles
    // the shallow nested wrappers used by the site's templates.
    for (let pass = 0; pass < 3; pass++) {
        content = content.replace(
            /<([a-z][\w:-]*)\b[^>]*(?:\shidden(?:=["'][^"']*["'])?|\saria-hidden=["']true["'])[^>]*>[\s\S]*?<\/\1>/gi,
            ' '
        );
    }
    return decodeEntities(content.replace(/<[^>]*>/g, '\n'));
}

function validateMarkupLeakage(docsRoot) {
    const failures = [];
    let pagesChecked = 0;

    for (const htmlFile of walkHtml(docsRoot)) {
        pagesChecked++;
        visibleText(fs.readFileSync(htmlFile, 'utf8'))
            .split(/\r?\n/)
            .forEach((line, index) => {
                const text = line.trim();
                if (text && LEAK_PATTERNS.some(pattern => pattern.test(text))) {
                    failures.push({
                        file: path.relative(docsRoot, htmlFile),
                        line: index + 1,
                        text: text.slice(0, 160)
                    });
                }
            });
    }

    if (failures.length) {
        const details = failures
            .map(failure => `  ${failure.file}:${failure.line} ${failure.text}`)
            .join('\n');
        throw new Error(`Visible source markup found in generated HTML:\n${details}`);
    }

    return {pagesChecked};
}

if (require.main === module) {
    const docsRoot = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
    const result = validateMarkupLeakage(docsRoot);
    console.log(`Markup-leakage validation passed across ${result.pagesChecked} pages.`);
}

module.exports = {validateMarkupLeakage, visibleText};
