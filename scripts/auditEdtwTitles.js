const fs = require('fs');
const path = require('path');

const stripHtml = (html = '') =>
    String(html)
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#039;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, ' ')
        .trim();

function auditEdtwTitles(rootDir = process.cwd()) {
    const briefsDir = path.join(rootDir, 'docs', 'en', 'briefs');
    if (!fs.existsSync(briefsDir)) {
        return { total: 0, genericCount: 0, descriptiveCount: 0, episodes: [] };
    }

    const entries = fs.readdirSync(briefsDir, { withFileTypes: true });
    const edwDirs = entries
        .filter(d => d.isDirectory() && d.name.startsWith('edw-'))
        .sort((a, b) => {
            const numA = parseInt(a.name.replace('edw-', ''), 10) || 0;
            const numB = parseInt(b.name.replace('edw-', ''), 10) || 0;
            return numA - numB;
        });

    const report = {
        total: edwDirs.length,
        genericCount: 0,
        descriptiveCount: 0,
        episodes: []
    };

    const genericRegex = /^(embracing\s+digital\s+this\s+week|\#?\d+\s*embracing\s+digital\s+this\s+week|\d{4}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]\d{4}|episode\s*\d+|edw-?\d+)$/i;

    for (const dir of edwDirs) {
        const indexPath = path.join(briefsDir, dir.name, 'index.html');
        if (!fs.existsSync(indexPath)) continue;

        const html = fs.readFileSync(indexPath, 'utf8');

        const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
        const pageTitle = titleMatch ? stripHtml(titleMatch[1]) : '';

        const ogTitleMatch = html.match(/<meta\b(?=[^>]*\bproperty=["']og:title["'])[^>]*\bcontent=["']([^"']+)["'][^>]*>/i);
        const ogTitle = ogTitleMatch ? stripHtml(ogTitleMatch[1]) : '';

        const dateMatch = html.match(/<span\b[^>]*class=["'][^"']*brief-date[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
        const briefDate = dateMatch ? stripHtml(dateMatch[1]).replace(/^[—\-\s]+/, '') : '';

        const leadMatch = html.match(/<section\b[^>]*class=["'][^"']*week-at-a-glance[^"']*["'][^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i);
        const glanceLead = leadMatch ? stripHtml(leadMatch[1]) : '';

        // Extract title parts
        const titleParts = pageTitle.split('|').map(s => s.trim());
        const rawEpisodeTitle = titleParts.length > 1 ? titleParts[1] : titleParts[0];

        const isGeneric = genericRegex.test(rawEpisodeTitle) || 
                          genericRegex.test(pageTitle) || 
                          rawEpisodeTitle === 'Embracing Digital This Week' ||
                          rawEpisodeTitle === dir.name;

        const epNumber = dir.name.replace('edw-', '');

        let proposedTitle = null;
        let confidence = 'none';

        if (isGeneric) {
            report.genericCount++;
            const topStoryMatch = html.match(/<(?:h3|h4)\b[^>]*class=["'][^"']*(?:article-title|top-story-title|card-title)[^"']*["'][^>]*>([\s\S]*?)<\/(?:h3|h4)>/i)
                || html.match(/<article\b[^>]*class=["'][^"']*(?:top-story|article-card)[^"']*["'][^>]*>[\s\S]*?<h3\b[^>]*>([\s\S]*?)<\/h3>/i);
            
            const topStory = topStoryMatch ? stripHtml(topStoryMatch[1]) : '';

            const pillarMatches = [...html.matchAll(/<a\b[^>]*href=["']#([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
            const pillars = pillarMatches
                .map(m => stripHtml(m[2]))
                .filter(p => p && !p.toLowerCase().includes('embracing digital transformation'));

            if (topStory && topStory.length > 5 && !genericRegex.test(topStory)) {
                proposedTitle = `${topStory} | EDTW #${epNumber}`;
                confidence = 'medium';
            } else if (pillars.length > 0) {
                proposedTitle = `${pillars.slice(0, 3).join(', ')} Update | EDTW #${epNumber}`;
                confidence = 'low';
            } else if (glanceLead && glanceLead.length > 20) {
                const firstSentence = glanceLead.split('.')[0].trim();
                if (firstSentence.length > 10 && firstSentence.length < 70) {
                    proposedTitle = `${firstSentence} | EDTW #${epNumber}`;
                    confidence = 'low';
                }
            }
        } else {
            report.descriptiveCount++;
        }

        report.episodes.push({
            folder: dir.name,
            number: epNumber,
            pageTitle,
            rawEpisodeTitle,
            isGeneric,
            briefDate,
            proposedTitle,
            confidence
        });
    }

    return report;
}

if (require.main === module) {
    const report = auditEdtwTitles();
    console.log(`Audited ${report.total} EDTW episodes.`);
    console.log(`Generic titles: ${report.genericCount}`);
    console.log(`Descriptive titles: ${report.descriptiveCount}`);

    const genericList = report.episodes.filter(e => e.isGeneric);
    console.log('\n--- Sample Generic Titles ---');
    console.log(JSON.stringify(genericList.slice(0, 10), null, 2));
}

module.exports = { auditEdtwTitles };
