const fs = require('fs');
const path = require('path');

const stripHtml = (html = '') =>
    String(html)
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#0*39;|&apos;/gi, "'")
        .replace(/&quot;|&#0*34;/gi, '"')
        .replace(/&lt;|&#0*60;/gi, '<')
        .replace(/&gt;|&#0*62;/gi, '>')
        .replace(/\s+/g, ' ')
        .trim();

function cleanTopicText(text) {
    if (!text) return '';
    let t = stripHtml(text).trim();
    // Replace newlines, tabs, and control characters with space
    t = t.replace(/[\r\n\t]+/g, ' ');
    // Replace double quotes and smart double quotes with single quotes to prevent breaking attributes/JSON
    t = t.replace(/["“”]/g, "'");
    // Remove wrapping quotes
    t = t.replace(/^['‘’]+|['‘’]+$/g, '').trim();
    // Remove trailing ellipsis or dots
    t = t.replace(/\s*(?:\.{2,}|…)+$/g, '').trim();
    // Remove generic prefixes
    t = t.replace(/^In\s+(?:the\s+)?[A-Za-z\s]+\s+news[:\-—]?\s*/i, '').trim();
    t = t.replace(/^(?:Breaking|Special|Update)[:\-—]\s*/i, '').trim();
    return t.replace(/\s+/g, ' ').trim();
}

function deriveTopicFromHtml(html, epNumber) {
    // 1. Check existing title to see if it already has a rich topic
    const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
    const rawTitle = titleMatch ? stripHtml(titleMatch[1]) : '';
    
    // Check if raw title has parts
    const parts = rawTitle.split('|').map(s => s.trim()).filter(Boolean);
    for (const part of parts) {
        if (/^(embracing digital|edtw|edw|\d{4}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}[-/]\d{1,2}[-/]\d{4}|#?\d+)/i.test(part)) {
            continue;
        }
        const cleanedPart = cleanTopicText(part);
        if (cleanedPart.length > 5) {
            return cleanedPart;
        }
    }

    // 2. Look for top stories in article cards or headings
    const storyHeadings = [];
    const topStoryMatches = [
        ...html.matchAll(/<article\b[^>]*class=["'][^"']*(?:top-story|article-card|pillar-article)[^"']*["'][^>]*>[\s\S]*?<(?:h3|h4)\b[^>]*>([\s\S]*?)<\/(?:h3|h4)>/gi),
        ...html.matchAll(/<(?:h3|h4)\b[^>]*class=["'][^"']*(?:article-title|top-story-title|card-title)[^"']*["'][^>]*>([\s\S]*?)<\/(?:h3|h4)>/gi)
    ];

    for (const m of topStoryMatches) {
        const cleaned = cleanTopicText(m[1]);
        if (cleaned.length >= 8 && !/^(this week at a glance|full coverage|listen now|watch now|top stories)/i.test(cleaned)) {
            storyHeadings.push(cleaned);
        }
    }

    // Also look for story paragraph summaries if headings were generic
    if (storyHeadings.length === 0) {
        const pMatches = [...html.matchAll(/<article\b[^>]*class=["'][^"']*(?:top-story|pillar-article)[^"']*["'][^>]*>[\s\S]*?<p\b[^>]*>([\s\S]*?)<\/p>/gi)];
        for (const pm of pMatches) {
            const pClean = cleanTopicText(pm[1]);
            const firstSent = pClean.split(/[.!?]\s+/)[0];
            if (firstSent && firstSent.length >= 15 && firstSent.length <= 80 && !/^(in\s+[a-z\s]+news)/i.test(firstSent)) {
                storyHeadings.push(firstSent);
                break;
            }
        }
    }

    if (storyHeadings.length > 0) {
        let chosen = storyHeadings[0];
        if (chosen.length > 65) {
            // Trim at word boundary
            const trimmed = chosen.slice(0, 62).replace(/\s+\S*$/, '');
            chosen = `${trimmed}...`;
        }
        return chosen;
    }

    // 3. Fallback to pillars
    const pillarMatches = [...html.matchAll(/<a\b[^>]*href=["']#([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
    const pillars = [...new Set(pillarMatches.map(m => stripHtml(m[2])).filter(p => p && !/embracing/i.test(p)))];
    if (pillars.length > 0) {
        if (pillars.length === 1) return `${pillars[0]} Insights`;
        if (pillars.length === 2) return `${pillars[0]} & ${pillars[1]}`;
        return `${pillars.slice(0, 2).join(', ')} & ${pillars[2]}`;
    }

    // 4. Fallback to glance lead
    const leadMatch = html.match(/<section\b[^>]*class=["'][^"']*week-at-a-glance[^"']*["'][^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    if (leadMatch) {
        const lead = cleanTopicText(leadMatch[1]);
        const firstSent = lead.split(/[.!?]\s+/)[0];
        if (firstSent.length > 10 && firstSent.length <= 65) {
            return firstSent;
        }
    }

    return 'Digital Transformation Update';
}

function updateEdtwTitles(rootDir = process.cwd()) {
    const briefsDir = path.join(rootDir, 'docs', 'en', 'briefs');
    if (!fs.existsSync(briefsDir)) return { updated: 0, episodes: [] };

    const entries = fs.readdirSync(briefsDir, { withFileTypes: true });
    const edwDirs = entries
        .filter(d => d.isDirectory() && d.name.startsWith('edw-'))
        .sort((a, b) => (parseInt(a.name.replace('edw-', ''), 10) || 0) - (parseInt(b.name.replace('edw-', ''), 10) || 0));

    const updatedEpisodes = [];

    for (const dir of edwDirs) {
        const epNum = dir.name.replace('edw-', '');
        const indexPath = path.join(briefsDir, dir.name, 'index.html');
        if (!fs.existsSync(indexPath)) continue;

        let html = fs.readFileSync(indexPath, 'utf8');
        const topic = deriveTopicFromHtml(html, epNum);
        const standardTitle = `${topic} | EDTW #${epNum}`;
        const pageTitle = `Embracing Digital This Week | ${standardTitle}`;

        // 1. Update <title>
        html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, `<title>${pageTitle}</title>`);

        // 2. Update og:title and twitter:title
        html = html.replace(/(<meta\b(?=[^>]*\bproperty=["']og:title["'])[^>]*\bcontent=["'])([^"']+)(["'][^>]*>)/i,
            (match, p1, p2, p3) => `${p1}${pageTitle}${p3}`);
        html = html.replace(/(<meta\b(?=[^>]*\bname=["']twitter:title["'])[^>]*\bcontent=["'])([^"']+)(["'][^>]*>)/i,
            (match, p1, p2, p3) => `${p1}${pageTitle}${p3}`);

        // 3. Update breadcrumbs <li aria-current="page">...</li>
        html = html.replace(/(<li\b[^>]*aria-current=["']page["'][^>]*>)([\s\S]*?)(<\/li>)/i,
            (match, p1, p2, p3) => `${p1}${standardTitle}${p3}`);

        // 4. Update <h1> <span class="brief-date">...</span>
        html = html.replace(/(<span\b[^>]*class=["'][^"']*brief-date[^"']*["'][^>]*>)([\s\S]*?)(<\/span>)/i,
            (match, p1, p2, p3) => `${p1}— ${standardTitle}${p3}`);

        // 5. Update JSON-LD breadcrumb block cleanly
        const breadcrumbJson = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://embracingdigital.org/en/home/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Embracing Digital This Week",
                    "item": "https://embracingdigital.org/en/briefs/"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": standardTitle,
                    "item": `https://embracingdigital.org/en/briefs/edw-${epNum}/`
                }
            ]
        };

        html = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, (fullMatch, jsonContent) => {
            if (jsonContent.includes('"BreadcrumbList"')) {
                return `<script type="application/ld+json">\n${JSON.stringify(breadcrumbJson, null, 4)}\n</script>`;
            }
            return fullMatch;
        });

        fs.writeFileSync(indexPath, html, 'utf8');

        updatedEpisodes.push({
            dir: dir.name,
            number: epNum,
            topic,
            standardTitle,
            pageTitle
        });
    }

    // Now update docs/en/briefs/index.html hub page
    const hubPath = path.join(briefsDir, 'index.html');
    if (fs.existsSync(hubPath)) {
        let hubHtml = fs.readFileSync(hubPath, 'utf8');

        for (const ep of updatedEpisodes) {
            // Replace card heading: <h3>#152 Embracing Digital This Week</h3> -> <h3>#152 Topic</h3>
            // or <h3>#152 2026-1-26</h3>
            const cardRegex = new RegExp(`(<a\\b[^>]*href=["'](?:https:\\/\\/embracingdigital\\.org)?\\/en\\/briefs\\/${ep.dir}\\/["'][^>]*aria-label=["'])([^"']+)(["'][\\s\\S]*?<img\\b[^>]*alt=["'])([^"']+)(["'][\\s\\S]*?<div\\b[^>]*class=["']episode-card-content["'][\\s\\S]*?<h3\\b[^>]*>)([\\s\\S]*?)(<\\/h3>)`, 'i');

            hubHtml = hubHtml.replace(cardRegex, (match, p1, p2, p3, p4, p5, p6, p7) => {
                return `${p1}${ep.standardTitle}${p3}${ep.standardTitle}${p5}#${ep.number} ${ep.topic}${p7}`;
            });
        }

        // Reconstruct the valid JSON-LD graph for briefs hub page
        const itemListElements = updatedEpisodes.map((ep, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "url": `https://embracingdigital.org/en/briefs/${ep.dir}/`,
            "name": ep.standardTitle
        }));

        const hubGraphJson = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "PodcastSeries",
                    "@id": "https://embracingdigital.org/#edtw",
                    "name": "Embracing Digital This Week",
                    "url": "https://embracingdigital.org/en/briefs/",
                    "inLanguage": "en",
                    "description": "Weekly news briefs on digital transformation across AI, cybersecurity, edge computing, data management, ubiquitous computing, and more.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Embracing Digital Transformation",
                        "url": "https://embracingdigital.org/"
                    },
                    "sameAs": [
                        "https://www.youtube.com/@embracingdigital",
                        "https://www.linkedin.com/company/embracingdigital"
                    ]
                },
                {
                    "@type": "CollectionPage",
                    "@id": "https://embracingdigital.org/en/briefs/#edtw-briefs",
                    "url": "https://embracingdigital.org/en/briefs/",
                    "name": "Embracing Digital This Week — All News Briefs",
                    "description": "Weekly news briefs on digital transformation across AI, cybersecurity, edge computing, data management, ubiquitous computing, and more.",
                    "isPartOf": {
                        "@id": "https://embracingdigital.org/#website"
                    },
                    "about": [
                        { "@id": "https://embracingdigital.org/#edtw", "@type": "PodcastSeries" }
                    ]
                },
                {
                    "@type": "ItemList",
                    "@id": "https://embracingdigital.org/en/briefs/#episode-list",
                    "name": "Embracing Digital This Week — News Briefs",
                    "itemListOrder": "http://schema.org/ItemListOrderDescending",
                    "numberOfItems": itemListElements.length,
                    "itemListElement": itemListElements
                }
            ]
        };

        hubHtml = hubHtml.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, (fullMatch, jsonContent) => {
            if (jsonContent.includes('"@graph"') || jsonContent.includes('"ItemList"')) {
                return `<script type="application/ld+json">\n${JSON.stringify(hubGraphJson, null, 2)}\n</script>`;
            }
            return fullMatch;
        });

        fs.writeFileSync(hubPath, hubHtml, 'utf8');
    }

    return {
        updated: updatedEpisodes.length,
        episodes: updatedEpisodes
    };
}

if (require.main === module) {
    const res = updateEdtwTitles();
    console.log(`Updated ${res.updated} EDTW episode titles.`);
    console.log('Sample updated titles:');
    res.episodes.slice(0, 10).forEach(e => console.log(`EDW-${e.number}: ${e.standardTitle}`));
    res.episodes.slice(-10).forEach(e => console.log(`EDW-${e.number}: ${e.standardTitle}`));
}

module.exports = { updateEdtwTitles, deriveTopicFromHtml };
