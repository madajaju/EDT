const fs = require('fs');
const path = require('path');

const EXPECTED_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const INTENTIONAL_EMPTY_STATE = /Coming soon|No published item available/i;

const stripMarkup = value => value
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(?:mdash|hellip);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

function validateHomepageFile(homepageFile) {
    const html = fs.readFileSync(homepageFile, 'utf8');
    const withoutScripts = html
        .replace(/<script\b[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[\s\S]*?<\/style>/gi, '');
    const failures = [];

    if (/Loading\.\.\./i.test(stripMarkup(withoutScripts))) {
        failures.push('contains a visible Loading... placeholder');
    }

    const cards = [...withoutScripts.matchAll(
        /<(?:button|article)\b[^>]*class=["'][^"']*\bweek-card\b[^"']*["'][^>]*>([\s\S]*?)<\/(?:button|article)>/gi
    )].map(match => match[1]);

    if (cards.length !== EXPECTED_DAYS.length) {
        failures.push(`expected 5 weekday cards, found ${cards.length}`);
    }

    EXPECTED_DAYS.forEach((day, index) => {
        const card = cards[index];
        if (!card) return;
        const visibleText = stripMarkup(card);
        const link = card.match(/class=["'][^"']*\bweek-title\b[^"']*["'][\s\S]*?<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
        const summary = card.match(/<p\b[^>]*class=["'][^"']*\bweek-summary\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i);
        const contentType = card.match(/class=["'][^"']*\bweek-show\b[^"']*["'][^>]*>([\s\S]*?)<\//i);

        if (!visibleText.includes(day)) failures.push(`card ${index + 1} is missing ${day}`);
        if (!contentType || !stripMarkup(contentType[1])) failures.push(`${day} is missing its content type`);
        if (!summary || !stripMarkup(summary[1])) failures.push(`${day} is missing its description`);

        if (link) {
            const href = link[1].trim();
            const title = stripMarkup(link[2]);
            if (!title) failures.push(`${day} has an empty linked title`);
            if (!/^(?:\/|https:\/\/embracingdigital\.org\/)/i.test(href)) {
                failures.push(`${day} has a non-canonical content link: ${href}`);
            }
        } else if (!INTENTIONAL_EMPTY_STATE.test(visibleText)) {
            failures.push(`${day} has neither linked content nor an intentional empty state`);
        }
    });

    if (failures.length) {
        throw new Error(
            `Homepage static-content validation failed for ${homepageFile}:\n` +
            failures.map(failure => `  ${failure}`).join('\n')
        );
    }

    return {cardsChecked: cards.length};
}

function validateHomepageContent(docsRoot) {
    const languageDirectories = fs.readdirSync(docsRoot, {withFileTypes: true})
        .filter(entry => entry.isDirectory());
    const homepages = languageDirectories
        .map(entry => path.join(docsRoot, entry.name, 'home', 'index.html'))
        .filter(homepage => fs.existsSync(homepage));

    if (!homepages.length) throw new Error(`No generated homepages found below ${docsRoot}`);
    homepages.forEach(validateHomepageFile);
    return {pagesChecked: homepages.length};
}

if (require.main === module) {
    const docsRoot = path.resolve(process.argv[2] || path.join(__dirname, '..', 'docs'));
    const result = validateHomepageContent(docsRoot);
    console.log(`Homepage static content valid across ${result.pagesChecked} page(s).`);
}

module.exports = {validateHomepageContent, validateHomepageFile};
