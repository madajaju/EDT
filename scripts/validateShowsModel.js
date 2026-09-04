const fs = require('fs');
const path = require('path');

const SHOWS_CONFIG = {
    overviewPage: 'docs/en/shows/index.html',
    shows: [
        {
            id: 'dta',
            title: 'Digital Transformation Architect',
            role: 'The Canon',
            dimension: 'How-To',
            path: 'docs/en/lectures/index.html',
            url: '/en/lectures/'
        },
        {
            id: 'edt',
            title: 'Embracing Digital Transformation',
            role: 'The Evidence',
            dimension: 'Who',
            path: 'docs/en/episodes/index.html',
            url: '/en/episodes/'
        },
        {
            id: 'edtw',
            title: 'Embracing Digital This Week',
            role: 'The Synthesis',
            dimension: "What's Next",
            path: 'docs/en/briefs/index.html',
            url: '/en/briefs/'
        }
    ],
    architectureHubPage: 'docs/en/digital-transformation/index.html',
    architectureHubUrl: '/en/digital-transformation/'
};

function validateShowsModel(rootDir = process.cwd()) {
    const results = {
        valid: true,
        errors: [],
        warnings: [],
        details: {}
    };

    const overviewFilePath = path.join(rootDir, SHOWS_CONFIG.overviewPage);
    if (!fs.existsSync(overviewFilePath)) {
        results.valid = false;
        results.errors.push(`Shows overview page missing at: ${SHOWS_CONFIG.overviewPage}`);
        return results;
    }

    const overviewHtml = fs.readFileSync(overviewFilePath, 'utf8');

    // Validate overview links to all 3 shows and architecture hub
    for (const show of SHOWS_CONFIG.shows) {
        if (!overviewHtml.includes(show.url)) {
            results.valid = false;
            results.errors.push(`Shows overview page is missing link to ${show.title} (${show.url})`);
        }
        if (!overviewHtml.includes(show.role)) {
            results.valid = false;
            results.errors.push(`Shows overview page is missing editorial role "${show.role}" for ${show.title}`);
        }
    }

    if (!overviewHtml.includes(SHOWS_CONFIG.architectureHubUrl)) {
        results.valid = false;
        results.errors.push(`Shows overview page is missing link to architecture hub (${SHOWS_CONFIG.architectureHubUrl})`);
    }

    // Validate each individual show landing page
    for (const show of SHOWS_CONFIG.shows) {
        const showFilePath = path.join(rootDir, show.path);
        if (!fs.existsSync(showFilePath)) {
            results.valid = false;
            results.errors.push(`Show landing page missing at: ${show.path}`);
            continue;
        }

        const showHtml = fs.readFileSync(showFilePath, 'utf8');

        // Check editorial role / subtitle presence
        if (!showHtml.includes(show.role)) {
            results.valid = false;
            results.errors.push(`${show.title} page (${show.path}) missing editorial badge/role: "${show.role}"`);
        }

        // Check cross-links to the other two shows and overview
        const otherShows = SHOWS_CONFIG.shows.filter(s => s.id !== show.id);
        for (const other of otherShows) {
            if (!showHtml.includes(other.url)) {
                results.valid = false;
                results.errors.push(`${show.title} page (${show.path}) missing cross-link to ${other.title} (${other.url})`);
            }
        }

        if (!showHtml.includes('/en/shows/')) {
            results.valid = false;
            results.errors.push(`${show.title} page (${show.path}) missing link to Shows Overview (/en/shows/)`);
        }

        if (!showHtml.includes(SHOWS_CONFIG.architectureHubUrl)) {
            results.valid = false;
            results.errors.push(`${show.title} page (${show.path}) missing link to Architecture Hub (${SHOWS_CONFIG.architectureHubUrl})`);
        }

        results.details[show.id] = {
            title: show.title,
            role: show.role,
            path: show.path,
            validated: true
        };
    }

    // Validate architecture hub links to shows
    const archFilePath = path.join(rootDir, SHOWS_CONFIG.architectureHubPage);
    if (fs.existsSync(archFilePath)) {
        const archHtml = fs.readFileSync(archFilePath, 'utf8');
        if (!archHtml.includes('/en/shows/')) {
            results.valid = false;
            results.errors.push(`Architecture hub (${SHOWS_CONFIG.architectureHubPage}) missing link to /en/shows/`);
        }
        for (const show of SHOWS_CONFIG.shows) {
            if (!archHtml.includes(show.url)) {
                results.valid = false;
                results.errors.push(`Architecture hub (${SHOWS_CONFIG.architectureHubPage}) missing link to ${show.title} (${show.url})`);
            }
        }
    }

    return results;
}

if (require.main === module) {
    const res = validateShowsModel();
    if (!res.valid) {
        console.error('Shows model validation errors:', res.errors);
        process.exit(1);
    }
    console.log('Shows editorial model valid and properly cross-linked.');
}

module.exports = {
    validateShowsModel,
    SHOWS_CONFIG
};
