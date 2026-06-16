const path = require('path');
const fs = require('fs');
const {marked} = require('marked');
const {exec, execSync} = require('child_process');
const lunr = require('lunr');
const {glob} = require('glob');
const cheerio = require('cheerio');
let _languages = {};
const SITE_URL = "https://embracingdigital.org";

const buildLangUrls = (langs, pathnameForLang) => {
    const urls = {};
    for(const i in langs) {
        let lang = langs[i];
        urls[lang.id] = `${SITE_URL}${pathnameForLang(lang)}`;
    }
    return urls;
};

module.exports = {
    friendlyName: 'publish',
    description: 'Publish the Podcast',
    static: true, // True is for Class methods. False is for object based.
    inputs: {},

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (inputs, env) {
        let edtDir = "C:\\Users\\darre\\OneDrive - Pulsipher Family\\Podcasts\\EDT";

        let targetDir = path.resolve(`C:\\Users\\darre\\IdeaProjects\\EmbracingDigital`);
        let edw = await Podcast.load({directory: "C:\\Users\\darre\\OneDrive - Pulsipher Family\\Podcasts\\EDW"});
        let edwSource = path.resolve(targetDir, "templates");

        let edt = await Podcast.load({directory: edtDir});
        let output = path.resolve(targetDir, 'docs');
        let source = path.resolve(targetDir, "templates");


        let dta = await Podcast.load({directory: "C:\\Users\\darre\\OneDrive - Pulsipher Family\\Podcasts\\DTA"});

        await _cleanGeneratedOutput(output, source);

        // Copy the core documents.
        // await _docDirectory(source, source);
        // return;
        // Process the episodes
        await _lectures(dta.episodes, output, source);
        _lecturesPage(dta.episodes, output, source);

        await _episodes(edt.episodes, output, source);
        _episodesPage(edt.episodes, output, source);


        await _guests(edt.guests, output, source);
        await _guestsPage(edt.guests, output, source);

        await _briefs(edw.episodes, output, edwSource);
        _briefsPage(edw.episodes, output, edwSource);

        await _deepDives(edw.episodes, output, edwSource);
        _deepDivesPage(edw.episodes, output, edwSource);


        await _sponsors(edt.sponsors, output, source);
        await _sponsorsPage(edt.sponsors, output, source);
        _episodeHome(output, source, edt, edw, dta);
        await _buildSearch(output, source);
        await _writeCrawlerFiles(output);
        await _syncGitRepo(output);
    }
};

const _docDirectory = async (output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    let sourcePath = path.resolve(output, 'en');

    for (let i in langs) {
        let lang = langs[i];
        let outputpath = path.resolve(output, lang.id);
        fs.mkdirSync(outputpath, {recursive: true});
        let files = {
            'header.html': 'translate',
            'community.html': 'translate',
            'shop.html': 'translate',
            'footer.html': 'translate',
        }
        for (let fname in files) {
            if (lang.id !== 'en') {
                let action = files[fname];
                if (action === 'copy') {
                    fs.copyFileSync(path.resolve(sourcePath, fname), path.resolve(outputpath, fname));
                } else {
                    let fileStr = fs.readFileSync(path.resolve(sourcePath, fname), 'utf-8');
                    let newStr = await _askAI("Translate the following into " + lang.name + " only return the translation: " + fileStr);
                    fs.writeFileSync(path.resolve(outputpath, fname), newStr);
                }
            }
        }
    }
}

const _cleanGeneratedOutput = async (output, source) => {
    const langStr = fs.readFileSync(path.resolve(source, "lang.json"), "utf-8");
    const langs = JSON.parse(langStr);
    const generatedRoots = ["home", "episodes", "lectures", "guests", "sponsors", "briefs"];

    for (let i in langs) {
        const lang = langs[i];
        const langRoot = path.resolve(output, lang.id);
        for (const rel of generatedRoots) {
            const target = path.resolve(langRoot, rel);
            if (fs.existsSync(target)) {
                fs.rmSync(target, {recursive: true, force: true});
            }
        }
    }
};

const _episodeHome = (output, source, edt, edw, dta) => {
    const langStr = fs.readFileSync(path.resolve(source, "lang.json"), "utf-8");
    const langs = JSON.parse(langStr);

    const now = new Date().setHours(0, 0, 0, 0);
    const isPublished = (ep) => ep && ep.state === "Published"
    const byNewestNumber = (a, b) => Number(b.number) - Number(a.number);


    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let i in langs) {
        const lang = langs[i];
        const langId = lang.id;

        const filteredContent = {
            briefs: edw.episodes.filter(b => isInTwoWeekWindow(b)).map(ep => serializeBrief(ep, lang)),
            episodes: edt.episodes.filter(e => isInTwoWeekWindow(e)).map(ep => serializeEpisode(ep, lang)),
            lectures: dta.episodes.filter(l => isInTwoWeekWindow(l)).map(ep => serializeLecture(ep, lang)),
            deepdives: edw.episodes.filter(d => isInTwoWeekWindow(d)).map(ep => serializeDeepDive(ep, lang))
        };
        const contentData = JSON.stringify(filteredContent);
        const outputpath = path.resolve(output, langId, "home");
        if (!fs.existsSync(outputpath)) fs.mkdirSync(outputpath, {recursive: true});

        const files = {
            context: {
                targetDir: outputpath,
                relpath: "../..",
                baseDir: source,
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/home/`)
                },

                page: {
                    id: "home",
                    canonical: `${SITE_URL}/${langId}/home/`,
                    title: "Embracing Digital Transformation",
                    description:
                        "Weekly briefings, frameworks, interviews, and architectural analysis to help leaders navigate digital transformation."
                },

                ogImage: `${SITE_URL}/images/logo.png`,
                summary:
                    "Weekly briefings, frameworks, interviews, and architectural analysis to help leaders navigate digital transformation.",

                // ✅ Featured objects for the hero/tiles
                contentData: contentData

                // ✅ Lists for “Latest” sections
                // episodes: episodesAll,
                // lectures: lecturesAll
            },
            targets: {
                "index.html": {template: `${source}/home.ejs`} // adjust if needed
            }
        };

        Generator.process(files, outputpath);
    }
};

const _createShort20 = (source, output) => {
    // Ensure the source video file and output folder paths are provided
    if (!source || !output) {
        throw new Error('Source and output paths must be provided');
    }

    // Get the output file name by appending '_short20.mp4' to the source base name
    const firstOutputFileName = path.dirname(source) + "/episode_short20.mp4";
    const outputFileName = path.join(output, `episode_short20.mp4`);
    if (fs.existsSync(firstOutputFileName)) {
        fs.copyFileSync(firstOutputFileName, outputFileName);
        return;
    }
    // ffmpeg command for creating a 20-second short video
    const ffmpegCommand = `ffmpeg -i "${source}" -t 20 -c:v libx264 -c:a aac "${firstOutputFileName}"`;

    // Execute the ffmpeg command
    try {
        let result = execSync(ffmpegCommand);
        fs.copyFileSync(firstOutputFileName, outputFileName);
        console.log('20-second video created successfully:', outputFileName);
    } catch (e) {
        console.error('Error creating short video:', e);
    }
};

const _episodeSetupHome = (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    episodes = episodes.sort((a, b) => Number(b.number) - Number(a.number));
    AEvent.emit('publish.start', {message: "Starting publish"});
    for (let i in langs) {
        let lang = langs[i];
        let pepisodes = [];
        let count = 0;
        for (let j in episodes) {
            let episode = episodes[j];
            if (episode.state === "Published" && count < 3) {
                let summary = episode.assets[`${lang.id}/blog`]?.summary || episode.summary;
                count++;

                summary = summary.length > 250 ? summary.substring(0, 250) + '..' : summary;
                let title = episode.assets[`${lang.id}/blog`]?.title || episode.title;
                let dateFormatted = new Date(episode.releaseDate).toLocaleDateString(lang.id, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                pepisodes.push({
                    number: episode.number,
                    date: dateFormatted,
                    slug: `edt-${episode.number}/index.html`,
                    image: `edt-${episode.number}/${episode.thumbnail}`,
                    tile: `edt-${episode.number}/tile.png`,
                    title: title,
                    guests: episode.guests,
                    summary: summary,
                    tags: episode.tags,
                    youtubeURL: episode.assets[`video`].url,
                    audioURL: episode.assets[`audio`].url,
                    video: episode.artifacts[`episode.mp4`].url,
                });
            }
        }

        let outputpath = path.resolve(output, lang.id, "home");
        // check that the episode.md file is there and read it into the content variable.
        let sourceEpisodeVideo = pepisodes[0].video;
        let outputEpisode0 = path.resolve(output, lang.id, "episodes", `edt-${pepisodes[0].number}`);
        _createShort20(sourceEpisodeVideo, outputpath);
        pepisodes[0].introVideo = `./episode_short20.mp4`;
        files = {
            context: {
                relpath: '../..',
                episodes: pepisodes,
                episode: pepisodes[0],
                baseDir: source,
                lang: lang,
                langID: lang.id,
                page: {
                    canonical: `${SITE_URL}/${lang.id}/home/`,
                    title: 'Embracing Digital Transformation',
                    description: 'Embracing Digital is a podcast about the digital transformation of the world.'
                },
                summary: "Embracing Digital is a podcast about the digital transformation of the world.",
                ogImage: '../../images/logo.png',
            },
            targets: {
                'recent-episodes.html': {template: `${source}/recent-episodes.ejs`},
                'current-episode.html': {template: `${source}/current-episodes.ejs`},
            }
        }
        Generator.process(files, outputpath);

    }
    AEvent.emit('publish.completed', {message: "Publish Finished"});
}
const _lecturesPage = (episodes, output, source) => {
    const langStr = fs.readFileSync(path.resolve(source, "lang.json"), "utf-8");
    const langs = JSON.parse(langStr);

    // Ensure newest first and unique by episode.number
    const byNumber = new Map();
    const sorted = [...(episodes || [])].sort((a, b) => Number(b.number) - Number(a.number));

    for (const ep of sorted) {
        if (!ep || ep.state !== "Published") continue;
        const number = String(ep.number ?? "").trim();
        if (!number || byNumber.has(number)) continue;
        byNumber.set(number, ep);
    }

    const uniqueSorted = Array.from(byNumber.values());

    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let i in langs) {
        let lang = langs[i];
        AEvent.emit("publish.lang", {message: `Starting publish ${lang.id}`});

        const pepisodes = [];

        for (const ep of uniqueSorted) {
            const number = String(ep.number ?? "").trim();

            const blogAsset = ep.assets?.[`${lang.id}/blog`];
            const title = blogAsset?.title || ep.title || `Episode ${number}`;

            let summary = blogAsset?.summary || ep.summary || "";
            summary = summary.length > 250 ? summary.substring(0, 250) + ".." : summary;

            const release = ep.releaseDate ? new Date(ep.releaseDate) : null;
            const dateISO =
                release && !Number.isNaN(release.getTime()) ? release.toISOString().slice(0, 10) : "";

            const dateDisplay =
                release && !Number.isNaN(release.getTime())
                    ? new Intl.DateTimeFormat(lang.id, {year: "numeric", month: "long", day: "numeric"}).format(release)
                    : "";

            pepisodes.push({
                number,
                date: dateDisplay,
                dateISO,
                slug: `dta-${number}/index.html`,
                image: `dta-${number}/${ep.thumbnail || ""}`,
                title,
                guests: ep.guests || {},
                summary,
                tags: ep.tags || {},
                youtubeURL: ep.assets?.video?.url || "",
                audioURL: ep.assets?.audio?.url || "",
            });
        }

        const outputpath = path.resolve(output, lang.id, "lectures");

        const relpath = "../..";

        const files = {
            context: {
                relpath,
                episodes: pepisodes,
                baseDir: source,
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/lectures/`)
                },
                langID: lang.id,
                summary: "Embracing Digital is a podcast about the digital transformation of the world.",
                page: {
                    canonical: `${SITE_URL}/${lang.id}/lectures/`,
                    title: "All Lectures | Digital Transformation Architect",
                    description: "Browse all lectures of Digital Transformation Architect: topics, and the latest research on digital transformation.",
                },
                ogImage: `${relpath}/images/logo.png`,
            },
            targets: {
                "index.html": {template: `${source}/lectures.ejs`},
            },
        };

        Generator.process(files, outputpath);
        AEvent.emit("publish.completed", {message: `Publish ${lang.id} Finished`});
    }

    AEvent.emit("publish.completed", {message: "Publish Finished"});
};
const _episodesPage = (episodes, output, source) => {
    const langStr = fs.readFileSync(path.resolve(source, "lang.json"), "utf-8");
    const langs = JSON.parse(langStr);

    // Ensure newest first and unique by episode.number
    const byNumber = new Map();
    const sorted = [...(episodes || [])].sort((a, b) => Number(b.number) - Number(a.number));

    for (const ep of sorted) {
        if (!ep || ep.state !== "Published") continue;
        const number = String(ep.number ?? "").trim();
        if (!number || byNumber.has(number)) continue;
        byNumber.set(number, ep);
    }

    const uniqueSorted = Array.from(byNumber.values());

    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let i in langs) {
        let lang = langs[i];
        AEvent.emit("publish.lang", {message: `Starting publish ${lang.id}`});

        const pepisodes = [];

        for (const ep of uniqueSorted) {
            const number = String(ep.number ?? "").trim();

            const blogAsset = ep.assets?.[`${lang.id}/blog`];
            const title = blogAsset?.title || ep.title || `Episode ${number}`;

            let summary = blogAsset?.summary || ep.summary || "";
            summary = summary.length > 250 ? summary.substring(0, 250) + ".." : summary;

            const release = ep.releaseDate ? new Date(ep.releaseDate) : null;
            const dateISO =
                release && !Number.isNaN(release.getTime()) ? release.toISOString().slice(0, 10) : "";

            const dateDisplay =
                release && !Number.isNaN(release.getTime())
                    ? new Intl.DateTimeFormat(lang.id, {year: "numeric", month: "long", day: "numeric"}).format(release)
                    : "";

            pepisodes.push({
                number,
                date: dateDisplay,
                dateISO,
                slug: `edt-${number}/index.html`,
                image: `edt-${number}/${ep.thumbnail || ""}`,
                title,
                guests: ep.guests || {},
                summary,
                tags: ep.tags || {},
                youtubeURL: ep.assets?.video?.url || "",
                audioURL: ep.assets?.audio?.url || "",
            });
        }

        const outputpath = path.resolve(output, lang.id, "episodes");

        const relpath = "../..";

        const files = {
            context: {
                relpath,
                episodes: pepisodes,
                baseDir: source,
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/episodes/`)
                },
                langID: lang.id,
                summary: "Embracing Digital is a podcast about the digital transformation of the world.",
                page: {
                    canonical: `${SITE_URL}/${lang.id}/episodes/`,
                    title: "All Episodes | Embracing Digital Transformation",
                    description: "Browse all episodes of Embracing Digital Transformation: guests, topics, and the latest conversations on digital transformation.",
                },
                ogImage: `${relpath}/images/logo.png`,
            },
            targets: {
                "index.html": {template: `${source}/episodes.ejs`},
            },
        };

        Generator.process(files, outputpath);
        AEvent.emit("publish.completed", {message: `Publish ${lang.id} Finished`});
    }

    AEvent.emit("publish.completed", {message: "Publish Finished"});
};
// Drop-in replacement for _episodes (SEO/AI fixes: canonical, description text, ISO date, OG image)
const _stripHtml = (html) =>
    String(html || "")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

const _toISODate = (d) => {
    const dt = new Date(d);
    return !d || Number.isNaN(dt.getTime()) ? "" : dt.toISOString().slice(0, 10);
};

const _episodes = async (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"));
    let langs = JSON.parse(langStr);

    const siteUrl = SITE_URL;

    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let i in episodes) {
        let episode = episodes[i];
        AEvent.emit("publish.inprogress", {message: episode.name});

        if (episode.state !== "Published") continue;

        for (let j in langs) {
            const lang = langs[j];
            const outputpath = path.resolve(output, lang.id, "episodes", `edt-${episode.number}`);
            // if(fs.existsSync(path.resolve(outputpath, 'index.html'))) continue;
            // source content location for this episode + language
            const edir = path.resolve(path.dirname(episode.saveFile), "Production", lang.id);

            const video = episode.assets?.["video"];
            const audio = episode.assets?.["audio"];

            // Prefer blog asset; fall back to artifact metadata
            let blog = episode.assets?.[`${lang.id}/blog`];
            if (!blog) blog = episode.artifacts?.[`${lang.id}/episode.md`];

            if (!blog) continue;

            // -------- Title / Summary (localized if missing) --------
            let summary = blog.summary ?? "";
            if (summary.length < 1) {
                if (lang.id !== "en") {
                    summary = await _askAI(
                        `Translate the following into ${lang.name} only return the translation: ${episode.summary}`
                    );
                } else {
                    summary = episode.summary ?? "";
                }
            }

            let title = blog.title ?? "";
            if (title.length < 1) {
                if (lang.id !== "en") {
                    title = await _askAI(
                        `Translate the following into ${lang.name} only return the translation: ${episode.title}`
                    );
                } else {
                    title = episode.title ?? "";
                }
            }

            // Read markdown content if it exists
            let content = "";
            const apath = path.resolve(edir, "episode.md");
            if (fs.existsSync(apath)) {
                content = fs.readFileSync(apath).toString("utf-8");
            }

            // -------- IDs / URLs --------
            let youtubeID = "";
            if (video?.url) {
                youtubeID = String(video.url).split("/").pop();
            } else {
                console.error(`Missing video ${lang.id} for ${episode.name}`);
            }

            let audioID = "";
            let audioURL = "";
            if (audio?.url) {
                audioURL = audio.url;
                audioID = String(audio.url).split("/").pop();
            } else {
                console.error(`Missing Audio ${lang.id} for ${episode.name}`);
            }

            // -------- Render HTML --------
            const contentHTML = marked(content);

            // Keep HTML summary for on-page display, but compute plain-text for meta/JSON-LD
            const summaryHTML = marked(summary);

            const summaryText = _stripHtml(summaryHTML).slice(0, 300);

            // Canonical + dateISO for schema / <time datetime>
            const canonicalAbs = `${siteUrl}/${lang.id}/episodes/edt-${episode.number}/index.html`;
            const dateISO = _toISODate(episode.releaseDate);

            // OG image should resolve (thumbnail is copied into the episode output folder)
            const ogImageAbs = `${siteUrl}/${lang.id}/episodes/edt-${episode.number}/${episode.thumbnail}`;

            episode.dateISO = dateISO;
            episode.image = `edt-${episode.number}/${episode.thumbnail}`;

            // Prepare files for generator
            const files = {
                context: {
                    relpath: "../../..",
                    baseDir: source,

                    // Page render values
                    title: title,
                    summary: summaryHTML,     // on-page (HTML)
                    summaryText: summaryText, // NEW: meta + JSON-LD (plain text)
                    content: contentHTML,

                    youtubeID,
                    audioID,
                    audioURL,

                    // Episode object, augmented for templates
                    episode: episode,

                    // SEO page object (FIXED spelling + correct values)
                    page: {
                        canonical: canonicalAbs,
                        siteUrl,
                        title: `${title} | Embracing Digital Transformation`,
                        description: summaryText,
                    },

                    // Social sharing
                    ogImage: ogImageAbs,

                    // Language
                    lang: {
                        ...lang,
                        urls: buildLangUrls(langs, (l) => `/${l.id}/episodes/edt-${episode.number}/`)
                    },
                    langID: lang.id,
                    episodeName: "edt-" + episode.number,
                },
                targets: {
                    "index.html": {template: `${source}/episode.ejs`}
                },
            };

            // Copy thumbnail + tile if present
            const thumbnailPath = path.resolve(edir, episode.thumbnail);
            if (fs.existsSync(thumbnailPath)) {
                files.targets[episode.thumbnail] = {copy: thumbnailPath};
            }

            const tilePath = path.resolve(edir, "tile.png");
            if (fs.existsSync(tilePath)) {
                files.targets["tile.png"] = {copy: tilePath};
            }

            // Artifact reference (if present)
            const artifact = episode.artifacts?.[`${lang.id}/episode.md`];

            try {
                Generator.process(files, outputpath);

                // Update/add blog asset for this language
                const assetUrl = canonicalAbs;

                if (artifact) {
                    const asset = new Asset({
                        name: `${lang.id}/blog`,
                        url: assetUrl,
                        path: {
                            canonical: assetUrl,       // FIXED spelling
                            title: title,
                            description: summaryText,  // plain text
                        },
                        artifact: artifact,
                        channel: "blog",
                        title: title,
                        summary: summaryText,        // store plain text
                        episode: episode,
                    });

                    episode.addToAssets(asset);
                    artifact.addToAssets(asset);
                    episode.saveMe();
                } else {
                    // still keep episode updated even if artifact missing
                    episode.saveMe();
                }
            } catch (e) {
                console.error(e);
            }
        }
    }

    AEvent.emit("publish.completed", {message: "Publish Finished"});
};

const _lectures = async (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"));
    let langs = JSON.parse(langStr);

    const siteUrl = SITE_URL;

    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let i in episodes) {
        let episode = episodes[i];
        AEvent.emit("publish.inprogress", {message: episode.name});

        if (episode.state !== "Published") continue;

        for (let j in langs) {
            const lang = langs[j];
            const outputpath = path.resolve(output, lang.id, "lectures", `dta-${episode.number}`);
            if (fs.existsSync(path.resolve(outputpath, 'index.html'))) continue;
            // source content location for this episode + language
            const edir = path.resolve(path.dirname(episode.saveFile), "Production", lang.id);

            const video = episode.assets?.["video"];
            const audio = episode.assets?.["audio"];

            // Prefer blog asset; fall back to artifact metadata
            let blog = episode.assets?.[`${lang.id}/blog`];
            if (!blog) blog = episode.artifacts?.[`${lang.id}/episode.md`];

            if (!blog) continue;

            // -------- Title / Summary (localized if missing) --------
            let summary = blog.summary ?? "";
            if (summary.length < 1) {
                if (lang.id !== "en") {
                    summary = await _askAI(
                        `Translate the following into ${lang.name} only return the translation: ${episode.summary}`
                    );
                } else {
                    summary = episode.summary ?? "";
                }
            }

            let title = blog.title ?? "";
            if (title.length < 1) {
                if (lang.id !== "en") {
                    title = await _askAI(
                        `Translate the following into ${lang.name} only return the translation: ${episode.title}`
                    );
                } else {
                    title = episode.title ?? "";
                }
            }

            // Read markdown content if it exists
            let content = "";
            const apath = path.resolve(edir, "episode.md");
            if (fs.existsSync(apath)) {
                content = fs.readFileSync(apath).toString("utf-8");
            }

            // -------- IDs / URLs --------
            let youtubeID = "";
            if (video?.url) {
                youtubeID = String(video.url).split("/").pop();
            } else {
                console.error(`Missing video ${lang.id} for ${episode.name}`);
            }

            let audioID = "";
            let audioURL = "";
            if (audio?.url) {
                audioURL = audio.url;
                audioID = String(audio.url).split("/").pop();
            } else {
                console.error(`Missing Audio ${lang.id} for ${episode.name}`);
            }

            // -------- Render HTML --------
            const contentHTML = marked(content);

            // Keep HTML summary for on-page display, but compute plain-text for meta/JSON-LD
            const summaryHTML = marked(summary);

            const summaryText = _stripHtml(summaryHTML).slice(0, 300);

            // Canonical + dateISO for schema / <time datetime>
            const canonicalAbs = `${siteUrl}/${lang.id}/lectures/dta-${episode.number}/index.html`;
            const dateISO = _toISODate(episode.releaseDate);

            // OG image should resolve (thumbnail is copied into the episode output folder)
            const ogImageAbs = `${siteUrl}/${lang.id}/lectures/dta-${episode.number}/${episode.thumbnail}`;

            episode.dateISO = dateISO;
            episode.image = `dta-${episode.number}/${episode.thumbnail}`;

            // Prepare files for generator
            const files = {
                context: {
                    relpath: "../../..",
                    baseDir: source,

                    // Page render values
                    title: title,
                    summary: summaryHTML,     // on-page (HTML)
                    summaryText: summaryText, // NEW: meta + JSON-LD (plain text)
                    content: contentHTML,

                    youtubeID,
                    audioID,
                    audioURL,

                    // Episode object, augmented for templates
                    episode: episode,

                    // SEO page object (FIXED spelling + correct values)
                    page: {
                        canonical: canonicalAbs,
                        siteUrl,
                        title: `${title} | Digital Transformation Architect`,
                        description: summaryText,
                    },

                    // Social sharing
                    ogImage: ogImageAbs,

                    // Language
                    lang: {
                        ...lang,
                        urls: buildLangUrls(langs, (l) => `/${l.id}/lectures/dta-${episode.number}/`)
                    },
                    langID: lang.id,
                    episodeName: "dta-" + episode.number,
                },
                targets: {
                    "index.html": {template: `${source}/episode.ejs`}
                },
            };

            // Copy thumbnail + tile if present
            const thumbnailPath = path.resolve(edir, episode.thumbnail);
            if (fs.existsSync(thumbnailPath)) {
                files.targets[episode.thumbnail] = {copy: thumbnailPath};
            }

            const tilePath = path.resolve(edir, "tile.png");
            if (fs.existsSync(tilePath)) {
                files.targets["tile.png"] = {copy: tilePath};
            }

            // Artifact reference (if present)
            const artifact = episode.artifacts?.[`${lang.id}/episode.md`];

            try {
                Generator.process(files, outputpath);

                // Update/add blog asset for this language
                const assetUrl = canonicalAbs;

                if (artifact) {
                    const asset = new Asset({
                        name: `${lang.id}/blog`,
                        url: assetUrl,
                        path: {
                            canonical: assetUrl,       // FIXED spelling
                            title: title,
                            description: summaryText,  // plain text
                        },
                        artifact: artifact,
                        channel: "blog",
                        title: title,
                        summary: summaryText,        // store plain text
                        episode: episode,
                    });

                    episode.addToAssets(asset);
                    artifact.addToAssets(asset);
                    episode.saveMe();
                } else {
                    // still keep episode updated even if artifact missing
                    episode.saveMe();
                }
            } catch (e) {
                console.error(e);
            }
        }
    }

    AEvent.emit("publish.completed", {message: "Publish Finished"});
};

const _askAI = async (prompt) => {
    AEvent.emit('translation.start', {message: prompt});
    let retval = await AIHelper.ask([{role: 'user', content: prompt}]);
    AEvent.emit('translation.complete', {message: prompt});
    return retval;
}

const _askAIForCode = async (prompt) => {
    AEvent.emit('translation.start', {message: prompt});
    let retval = await AIHelper.askForCode([{role: 'user', content: prompt}]);
    AEvent.emit('translation.complete', {message: prompt});
    return retval;
}

const BATCH_SIZE = 50;

const _buildSearch = async (out, source) => {
    const langStr = await fs.promises.readFile(path.resolve(source, "lang.json"), 'utf-8');
    const langs = JSON.parse(langStr);

    const keywords = ['episodes', 'briefs', 'guests'];

    for (const lname in langs) {
        const lang = langs[lname];
        console.log("Index Processing for :", lang.id);
        AEvent.emit('search.processing', {message: `Lang: ${lang.id}`});
        const fileDir = path.resolve(out, lang.id);

        const files = glob.sync(`${fileDir}/{episodes,briefs,lectures,digital-transformation,guests}/**/*.html`);

        const batches = getBatches(files, BATCH_SIZE);

        const documents = [];

        let i = 0;
        for (const batch of batches) {
            for (let file of batch) {
                const htmlContent = await fs.promises.readFile(file, 'utf-8');
                const $ = cheerio.load(htmlContent);


                const title = $('#episode-title').text() || 'Untitled';
                const summary = $('.episode-container').text() || '';
                let type = 'Episode';
                if (file.includes('briefs')) {
                    type = 'News Brief';
                } else if (file.includes('guests')) {
                    type = 'Guest';
                } else if (file.includes('lecture')) {
                    type = 'Lecture';
                } else if (file.includes('digital-transformation')) {
                    type = 'Learning'
                }

                const startIndex = keywords.reduce((currentIndex, keyword) => {
                    const index = file.indexOf(keyword);
                    return index !== -1 && (currentIndex === -1 || index < currentIndex) ? index : currentIndex;
                }, -1);

                // Trim everything up until the keyword
                if (startIndex !== -1) {
                    file = file.slice(startIndex); // Keep only the part from the first keyword onward
                }

                const image = $('meta[property="og:image"]').attr('content') || "";
                documents.push({
                    title: title.trim(),
                    summary: summary.trim(),
                    id: i++,       // Unique identifier for the document
                    image: `${path.dirname(file)}/${image}`,
                    type: type,
                    link: `./${file}`,
                });
            }
        }

        // Lunr index creation
        const index = lunr(function () {
            this.field('title');
            this.field('summary');
            documents.forEach((doc) => this.add(doc));
        });

        const outputIndexFile = path.resolve(fileDir, 'assets', 'js', 'lunr-index.js');
        await fs.promises.writeFile(outputIndexFile, `const lobjects = ${JSON.stringify({index, documents}, null, 2)}`);
    }
    AEvent.emit('search.completed', {message: 'Done Indexing'});
    console.log("Index Processing Complete");
};

const _writeCrawlerFiles = async (output) => {
    const robotsTxt = [
        "User-agent: *",
        "Allow: /",
        `Sitemap: ${SITE_URL}/sitemap.xml`,
        "",
        "# Embracing Digital Transformation",
        `# Canonical host: ${SITE_URL}`,
        ""
    ].join("\n");

    const llmsTxt = [
        "# Embracing Digital Transformation",
        "",
        "Weekly briefings, interviews, lectures, guest profiles, sponsor pages, and architectural deep dives on digital transformation.",
        "",
        "## Site map",
        "- English is the canonical content source for this site right now.",
        "- Use the page sections below to locate the highest-signal entry points for retrieval and citation.",
        "",
        "## Key pages",
        `- [Home](${SITE_URL}/en/home/)`,
        `- [Episodes](${SITE_URL}/en/episodes/)`,
        `- [Lectures](${SITE_URL}/en/lectures/)`,
        `- [Briefs](${SITE_URL}/en/briefs/)`,
        `- [Deep Dives](${SITE_URL}/en/briefs/deepdives.html)`,
        `- [Guests](${SITE_URL}/en/guests/)`,
        `- [Sponsors](${SITE_URL}/en/sponsors/)`,
        `- [Search](${SITE_URL}/en/search.html)`,
        "",
        "## Content clusters",
        "- Briefs: weekly summaries, analysis, and topical news briefs.",
        "- Episodes: podcast interviews and discussion-based content.",
        "- Lectures: direct instructional and architectural material.",
        "- Guests: speaker and contributor profiles.",
        "- Sponsors: partner and sponsor detail pages.",
        "- Deep dives: long-form architectural analysis tied to briefs.",
        "",
        "## Notes",
        "- The site uses canonical URLs without `www`.",
        "- Structured data and metadata are generated per page in the publish pipeline.",
        ""
    ].join("\n");

    const walkHtml = (dir) => {
        const files = [];
        const entries = fs.readdirSync(dir, {withFileTypes: true});
        for (const entry of entries) {
            const abs = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                files.push(...walkHtml(abs));
            } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) {
                files.push(abs);
            }
        }
        return files;
    };
    const isRootRedirect = (rel) => /^([^/]+\/)?index\.html$/i.test(rel) || /^index\.html$/i.test(rel);
    const isNoIndex = (file) => {
        try {
            const head = fs.readFileSync(file, "utf8").slice(0, 4096);
            return /name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(head);
        } catch {
            return false;
        }
    };

    const sitemapUrls = walkHtml(output)
        .map((file) => path.normalize(file))
        .map((file) => {
            const rel = path.relative(output, file).replace(/\\/g, "/");
            return {file, rel};
        })
        .filter(({rel, file}) => !isRootRedirect(rel) && !isNoIndex(file))
        .map(({file, rel}) => {
            let urlPath = `/${rel}`;
            if (urlPath.endsWith("/index.html")) {
                urlPath = urlPath.slice(0, -"index.html".length);
            }
            const lastmod = fs.statSync(file).mtime.toISOString();
            return {loc: `${SITE_URL}${urlPath}`, lastmod};
        })
        .sort((a, b) => a.loc.localeCompare(b.loc));

    const sitemapXml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemapUrls.map(({loc, lastmod}) => [
            "  <url>",
            `    <loc>${loc}</loc>`,
            `    <lastmod>${lastmod}</lastmod>`,
            "  </url>"
        ].join("\n")),
        "</urlset>",
        ""
    ].join("\n");

    await fs.promises.writeFile(path.resolve(output, "robots.txt"), robotsTxt, "utf8");
    await fs.promises.writeFile(path.resolve(output, "llms.txt"), llmsTxt, "utf8");
    await fs.promises.writeFile(path.resolve(output, "llm.txt"), llmsTxt, "utf8");
    await fs.promises.writeFile(path.resolve(output, "sitemap.xml"), sitemapXml, "utf8");
};

function getBatches(files, batchSize) {
    const result = [];
    for (let i = 0; i < files.length; i += batchSize) {
        result.push(files.slice(i, i + batchSize));
    }
    return result;
}

const _guests = async (guests, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"));
    let langs = JSON.parse(langStr);
    const myGuests = guests;
    for (let i in langs) {
        let lang = langs[i];
        let outputpath = path.resolve(`${output}/${lang.id}/guests`);
        for (const guest of myGuests || []) {
            if (!guest) {
                console.warn("Skipping guest with undefined data")
                continue;
            }
            try {
                let guestDir = path.resolve(outputpath, guest.id.replace(/\s/g, '-').toLowerCase());
                if (!fs.existsSync(guestDir)) {
                    fs.mkdirSync(guestDir, {recursive: true});
                }

                let socials = guest.socials;

                const toSlug = (s = "") =>
                    String(s).trim().toLowerCase()
                        .replace(/\./g, "-")
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9\-]/g, "")
                        .replace(/\-+/g, "-");

                const stripHtml = (html = "") =>
                    String(html)
                        .replace(/<[^>]*>/g, " ")
                        .replace(/\s+/g, " ")
                        .trim();

                const clamp = (s = "", max = 180) => {
                    s = String(s).trim();
                    if (s.length <= max) return s;
                    // try not to cut mid-word
                    const cut = s.slice(0, max);
                    const lastSpace = cut.lastIndexOf(" ");
                    return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim();
                };

                const normalizeLinkedIn = (value = "") => {
                    const v = String(value || "").trim();
                    if (!v) return "";
                    if (v.startsWith("http://") || v.startsWith("https://")) return v;
                    // if they provide "in/username" or just "username"
                    const cleaned = v.replace(/^\/+/, "").replace(/^in\//, "");
                    return `https://www.linkedin.com/in/${cleaned}`;
                };

// --- inside your gname loop ---
                let bioContent = await _getBio(guest, lang);

// If _getBio returns markdown, keep it as markdown and render to HTML for the body:
                let bioHTML = marked(bioContent || "");

// Plain-text version for meta/schema
                let bioText = clamp(stripHtml(bioHTML), 180);
                if (!bioText || bioText.toLowerCase() === "tbd") {
                    bioText = `${guest.name} — guest on Embracing Digital Transformation. Explore episodes and key topics.`;
                    bioHTML = bioText;
                }

// Deduplicate episodes by slug or number
                const seen = new Set();
                const episodesDeduped = (guest.episodes || []).filter(ep => {
                    const key = ep.slug || ep.number || ep.title;
                    if (!key) return true;
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                });

// Tags union from deduped episodes
                let myTags = new Set();
                for (let ep of episodesDeduped) {
                    const tags = ep?.tags ? Object.keys(ep.tags) : [];
                    tags.forEach(t => myTags.add(t));
                }
                let tags = Array.from(myTags);

// LinkedIn normalization
                let linkedin = "";
                if (guest.socials) {
                    for (let sname in guest.socials) {
                        if (sname === "linkedin") {
                            linkedin = normalizeLinkedIn(guest.socials[sname]);
                        }
                    }
                }

                const guestSlug = toSlug(guest.id || guest.name);
                const canonicalUrl = `${SITE_URL}/${lang.id}/guests/${guestSlug}/`;
                let theGuest = {...guest._attributes, episodes: episodesDeduped}; // pass deduped list
                theGuest.thumbnail = canonicalUrl + guest.thumbnail;
                theGuest.slug = canonicalUrl;

                let files = {
                    context: {
                        relpath: "../../..",
                        lang: {
                            ...lang,
                            urls: buildLangUrls(langs, (l) => `/${l.id}/guests/${guestSlug}/`)
                        },
                        baseDir: source,
                        guest: theGuest,
                        linkedin,
                        tags,

                        // Use HTML in the body
                        bio: bioHTML,

                        // Use text for SEO/meta/schema
                        summary: bioText,

                        image: theGuest.thumbnail,
                        ogImage: theGuest.thumbnail,

                        page: {
                            canonical: canonicalUrl,          // ✅ fix spelling + correct URL
                            title: `${theGuest.name} | Guests`,  // (or include siteName)
                            description: bioText              // ✅ plain text only
                        },

                        guestName: theGuest.name,
                        guestID: theGuest.id
                    },
                    targets: {
                        "index.html": {template: `${source}/guest.ejs`}
                    }
                };


                let edir = path.resolve(guest.podcast.baseDirectory);
                let gpath = path.resolve(`${edir}/guests/${guest.name.replace(/\s/g, '-').replace(/\./g, '-')}`);
                let profilePicturePath = path.resolve(gpath, guest.thumbnail);
                if (fs.existsSync(profilePicturePath)) {
                    files.targets[guest.thumbnail] = {copy: profilePicturePath};
                }
                Generator.process(files, guestDir);
            } catch (e) {
                console.error("Guest is null");

            }
        }
    }
}

const _sponsorsPage = async (sponsors, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    sponsors = sponsors.sort();
    AEvent.emit('publish.start', {message: "Starting publish"});
    for (let i in langs) {
        let lang = langs[i];
        let psponsors = [];
        for (let j in sponsors) {
            let sponsor = sponsors[j];
            let bio = await _getContent(sponsor, lang);
            let socials = sponsor.socials;
            let linkedin = "";
            for (let i in socials) {
                let social = socials[i];
                if (social.stype === 'linkedin') {
                    linkedin = social.name;
                }
            }

            psponsors.push({
                image: `${SITE_URL}/${lang.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/${sponsor.image}`,
                slug: `${SITE_URL}/${lang.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/index.html`,
                title: sponsor.name,
                summary: bio.substring(0, 250) + '...',
                numOfEpisodes: sponsor.episodes.length,
            });
        }

        let outputpath = path.resolve(output, lang.id, "sponsors");
        // check that the episode.md file is there and read it into the content variable.
        files = {
            context: {
                relpath: '../..',
                sponsors: psponsors,
                baseDir: source,
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/sponsors/`)
                },
                langID: lang.id,
                page: {
                    canonical: `${SITE_URL}/${lang.id}/sponsors/`,
                    title: "Sponsors",
                    description: "Embracing Digital is a podcast about the digital transformation of the world."
                },
                summary: "Embracing Digital is a podcast about the digital transformation of the world.",
                ogImage: '../../images/logo.png',
            },
            targets: {
                'index.html': {template: `${source}/sponsors.ejs`},
            }
        }
        Generator.process(files, outputpath);
    }
    AEvent.emit('publish.completed', {message: "Publish Finished"});
}
const _guestsPage = async (guests, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    const mySortedGuests = guests.sort();
    AEvent.emit('publish.start', {message: "Starting publish"});
    for (let i in langs) {
        let lang = langs[i];
        let pguests = [];
        let j = 0;
        for (const guest of mySortedGuests) {
            if (!guest) {
                console.warn(`Skipping guest with undefined data at index ${j}`);
                continue;
            }
            let bio = await _getBio(guest, lang);
            let myTags = new Set();
            for (let i in guest.episodes) {
                let episode = guest.episodes[i];
                let tags = Object.keys(episode.tags);
                myTags = new Set([...myTags, ...tags]);
            }
            let tags = Array.from(myTags);

            let socials = guest.socials;
            let linkedin = "";
            for (let i in socials) {
                let social = socials[i];
                if (social.stype === 'linkedin') {
                    linkedin = social.name;
                }
            }

            pguests[j++] = {
                image: `${SITE_URL}/${lang.id}/guests/${guest.name.replace(/\s+/g, '-').toLowerCase()}/${guest.thumbnail}`,
                slug: `./${guest.name.replace(/\s+/g, '-').toLowerCase()}/index.html`,
                title: guest.name,
                summary: bio.substring(0, 250) + '...',
                tags: tags,
                numOfEpisodes: guest.episodes.length,
            }
        }

        let outputpath = path.resolve(output, lang.id, "guests");
        // check that the episode.md file is there and read it into the content variable.
        files = {
            context: {
                relpath: '../..',
                guests: pguests,
                baseDir: source,
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/guests/`)
                },
                langID: lang.id,
                summary: "Embracing Digital is a podcast about the digital transformation of the world.",
                page: {
                    canonical: `${SITE_URL}/${lang.id}/guests/`,
                    title: "Guests",
                    description: "Embracing Digital is a podcast about the digital transformation of the world."
                },
                ogImage: '../../images/logo.png',
            },
            targets: {
                'index.html': {template: `${source}/guests.ejs`},
            }
        }
        Generator.process(files, outputpath);
    }
    AEvent.emit('publish.completed', {message: "Publish Finished"});
}

async function _getBio(guest, lang) {
    let bioContent = "";
    if (!guest)
        return "";
    let edir = path.resolve(guest.podcast.baseDirectory);
    let gpath = path.resolve(`${edir}/guests/${guest.name.replace(/\s/g, '-').replace(/\./g, '-')}`);
    let bioPath = path.resolve(gpath, `bio-${lang.id}.md`);
    if (fs.existsSync(bioPath)) {
        bioContent = fs.readFileSync(bioPath).toString('utf-8');
    } else {
        AEvent.emit('bio.translate', {message: `Bio Translate, ${lang.id} - ${guest.name}`});
        let bioFile = path.resolve(gpath, `bio.md`);
        try {
            bioContent = fs.readFileSync(bioFile).toString('utf-8');
            if (lang.id != 'en') {
                bioContent = await _askAI(`Translate the following into ${lang.name} only return the translation: ${bioContent}`);
            }
            fs.writeFileSync(bioPath, bioContent);
        } catch (e) {
            console.warn(`Missing bio for guest ${guest.name}`);
        }
    }
    return bioContent;
}

const _sponsors = async (sponsors, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"));
    let langs = JSON.parse(langStr);
    for (let i in langs) {
        let lang = langs[i];
        let outputpath = path.resolve(`${output}/${lang.id}/sponsors`);
        for (let gname in sponsors) {
            let sponsor = sponsors[gname];
            let sponsorDir = path.resolve(outputpath, sponsor.name.replace(/\s/g, '-').toLowerCase());
            if (!fs.existsSync(sponsorDir)) {
                fs.mkdirSync(sponsorDir, {recursive: true});
            }
            let sponsorContent = await _getContent(sponsor, lang);
            let contentHTML = marked(sponsorContent);
            let socials = sponsor.socials;
            let linkedin = "";
            for (let i in socials) {
                let social = socials[i];
                if (social.stype === 'linkedin') {
                    linkedin = social.name;
                }
            }

            let files = {
                context: {
                    relpath: '../../..',
                    lang: {
                        ...lang,
                        urls: buildLangUrls(langs, (l) => `/${l.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/`)
                    },
                    baseDir: source,
                    sponsor: sponsor,
                    linkedin: linkedin,
                    info: contentHTML,
                    image: `${SITE_URL}/${lang.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/${sponsor.image}`,
                    guestName: sponsor.name,
                    guestID: sponsor.id,
                    ogImage: `${SITE_URL}/${lang.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/${sponsor.image}`,
                    summary: contentHTML,
                    page: {
                        canonical: `${SITE_URL}/${lang.id}/sponsors/${sponsor.name.replace(/\s+/g, '-').toLowerCase()}/`,
                        title: "Sponsors",
                        description: _stripHtml(contentHTML).slice(0, 300)
                    },
                },
                targets: {
                    'index.html': {template: `${source}/sponsor.ejs`},
                }
            };
            let gpath = sponsor.baseDirectory;
            let profilePicturePath = path.resolve(gpath, sponsor.image);
            if (fs.existsSync(profilePicturePath)) {
                files.targets[sponsor.image] = {copy: profilePicturePath};
            }
            Generator.process(files, sponsorDir);
        }
    }
}

async function _getContent(sponsor, lang) {
    let infoContent = "";
    let gpath = path.resolve(sponsor.baseDirectory);
    let contentPath = path.resolve(gpath, `info-${lang.id}.md`);
    if (fs.existsSync(contentPath)) {
        infoContent = fs.readFileSync(contentPath).toString('utf-8');
    } else {
        AEvent.emit('sponsor.translate', {message: `Sponsor Translate, ${lang.id} - ${sponsor.name}`});
        let infoFile = path.resolve(gpath, `info.md`);
        infoContent = fs.readFileSync(infoFile).toString('utf-8');
        if (lang.id != 'en') {
            infoContent = await _askAI(`Translate the following into ${lang.name} only return the translation: ${infoContent}`);
        }
        fs.writeFileSync(contentPath, infoContent);
    }
    return infoContent;
}

const _briefsSetUpHome = async (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    episodes = episodes.sort((a, b) => Number(b.number) - Number(a.number));
    for (let i in langs) {
        let lang = langs[i];
        let destFile = path.resolve(output, lang.id, "home", "current-news.html");
        let sourceFile = path.resolve(output, lang.id, "briefs", `edw-${episodes[0].number}`, 'news.html');
        if (fs.existsSync(sourceFile)) {
            fs.copyFileSync(sourceFile, destFile);
        } else {
            console.warn(`Missing briefs for episode ${episodes[0].number}`);
        }
    }
}
const _briefsPage = (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    episodes = episodes.sort((a, b) => Number(b.number) - Number(a.number));
    AEvent.emit('publish.start', {message: "Starting publish"});
    for (let i in langs) {
        let lang = langs[i];
        let pepisodes = {};
        for (let j in episodes) {
            let episode = episodes[j];
            if (episode.state === "Published") {
                let summary = episode.summary;
                summary = summary.length > 250 ? summary.substring(0, 250) + '..' : summary;
                let dateFormatted = new Date(episode.releaseDate).toLocaleDateString(lang.id, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                pepisodes[j] = {
                    number: episode.number,
                    date: dateFormatted,
                    slug: `edw-${episode.number}/index.html`,
                    image: `edw-${episode.number}/${episode.thumbnail}`,
                    title: episode.title,
                    guests: episode.guests,
                    summary: summary,
                    tags: episode.tags,
                    youtubeURL: episode.assets[`${lang.id}/video`]?.url || "",
                    audioURL: episode.assets[`${lang.id}/audio`]?.url || "",
                }
            }
        }

        let outputpath = path.resolve(output, lang.id, "briefs");
        // check that the episode.md file is there and read it into the content variable.
        files = {
            context: {
                relpath: '../..',
                episodes: pepisodes,
                baseDir: source,
                summary: "This is the home page for the Embracing Digital Podcast. It is a collection of news briefs and articles from the Embracing Digital team.",
                page: {
                    id: 'briefs',
                    canonical: `${SITE_URL}/${lang.id}/briefs/`,
                    title: 'Embracing Digital This Week | Digital Transformation News Briefs',
                    description: 'Embracing Digital This Week is a multi-language news brief on digital transformation, covering AI, cybersecurity, edge computing, data management, ubiquitous computing, and advanced communications.'
                },
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/briefs/`)
                },
                langID: lang.id,
                ogImage: `../../assets/images/logo.png`
            },
            targets: {
                'index.html': {template: `${source}/briefs.ejs`},
            }
        }
        Generator.process(files, outputpath);
    }
    AEvent.emit('publish.completed', {message: "Publish Finished"});
}

const _briefs = async (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), "utf-8");
    let langs = JSON.parse(langStr);

    const siteUrl = SITE_URL;

    // -------- helpers --------


    const normalizePillarsForTemplate = (episode, pillars) => {
        // Supports either:
        // 1) Array: [ { pillar: "Artificial Intelligence", articles:[...] }, ... ]
        // 2) Object: { "Artificial Intelligence": { articles:[...] }, ... }
        const out = {};
        if (!pillars) return out;


        const normArticle = (episode, pillar, a) => {
            if (a.links) {
                a.urls = a.links;
            }
            // Convert markdown links to HTML format
            for (let i in a.urls) {
                let url = a.urls[i];
                if (url) {
                    if (url.includes('](')) {
                        url = url.replace(/\[([^\]]+)\]\(([^)]+?)\)/g, '$2');
                    }
                    url = url.replace(/\)$/, '');
                    a.urls[i] = url;
                }
            }

            // I need to change the image to point to the filename in the images/briefs/edw-
            if (a.image) {
                try {
                    if (typeof a.image === 'string') {
                        a.image = `images/briefs/edw-${episode.number}/${path.basename(a.image)}`;
                    } else {
                        a.image = `images/briefs/edw-${episode.number}/${path.basename(a.image.filename)}`;
                    }
                } catch (e) {
                    console.error(e);

                }
            } else {
                a.image = `images/${pillar.toLowerCase().replace(' ', '-')}.jpg`
            }

            return {
                title: a?.title || "",
                text: a?.text || a?.summary || a?.description || "",
                image: a?.image || a?.img || "",
                urls: Array.isArray(a?.urls)
                    ? a.urls.map((l) => ({
                        url: l?.url || l?.href || String(l || ""),
                        title: l?.title || ""
                    }))
                    : []
            }
        };

        if (Array.isArray(pillars)) {
            for (const p of pillars) {
                const name = p?.pillar || p?.name;

                if (!name) continue;
                out[name] = {
                    articles: (p?.articles || []).map(a => normArticle(episode, name, a))
                };
            }
        } else if (typeof pillars === "object") {
            for (const name of Object.keys(pillars)) {
                const p = pillars[name] || {};
                out[name] = {
                    articles: (p?.articles || []).map(a => normArticle(episode, name, a))
                };
            }
        }
        return out;
    };

    const pickTopStories = (pillarsObj, count = 4) => {
        const picked = [];
        for (let pillarName in pillarsObj) {
            const arts = pillarsObj[pillarName].articles || [];
            if (arts[0]) {
                picked.push(arts[0]);
            }
        }
        return picked;
    };

    AEvent.emit("publish.start", {message: "Starting publish"});

    for (let e = 0; e < episodes.length; e++) {
        let episode = episodes[e];
        AEvent.emit("publish.inprogress", {message: episode.name});

        if (episode.state !== "Published") continue;

        for (let li in langs) {
            const lang = langs[li];

            const outputpath = path.resolve(output, lang.id, "briefs", `edw-${episode.number}`);
            fs.mkdirSync(outputpath, {recursive: true});

            // source content location for this episode + language
            const edir = path.resolve(path.dirname(episode.saveFile), "Production", lang.id);

            const video = episode.assets?.[`${lang.id}/video`];
            const audio = episode.assets?.[`${lang.id}/audio`];

            let blog = episode.assets?.[`${lang.id}/blog`];

            // --- Build/refresh Meta week-at-a-glance (only once, stored on episode) ---
            if (episode.meta === "Meta") {
                const meta = await _askAIForCode(`
You are an expert editorial architect for digital transformation content.

Rewrite the INPUT SUMMARY to maximize:
- human readability and authority
- SEO clarity
- AI semantic extractability

OUTPUT REQUIREMENTS:
- Return ONLY valid JSON. No markdown. No commentary.
- Must conform EXACTLY to this schema:

{
  "week_at_a_glance": {
    "title": "This Week at a Glance",
    "lead": "string",
    "why_it_matters": "string",
    "architect_take": "string | null",
    "pillars": ["string", "..."]
  }
}

CONSTRAINTS:
- Preserve the original meaning. Do NOT add new facts or opinions.
- Do NOT exceed 150 words total across lead + why_it_matters + architect_take.
- Write in a calm, executive, analytical tone.
- The 'pillars' array must include only pillar names explicitly referenced or clearly implied in the summary.
- If you cannot justify a pillar, omit it.

INPUT SUMMARY:
<<<
${episode.summary}
>>>

OUTPUT:
Return ONLY valid JSON. No markdown. No commentary.
`);
                episode.meta = meta?.[0]?.week_at_a_glance || meta?.week_at_a_glance || episode.meta;
                episode.saveMe();
            }

            const weekAtAGlanceHtml = `
<section class="week-at-a-glance" aria-labelledby="week-glance-title">
  <h2 id="week-glance-title">${escapeHtml(episode?.meta?.title || "This Week at a Glance")}</h2>
  <p>${escapeHtml(episode?.meta?.lead || "")}</p>
  <p>${escapeHtml(episode?.meta?.why_it_matters || "")}</p>
  ${
                episode?.meta?.architect_take
                    ? `<p class="architect-take"><strong>Architect’s Take:</strong> ${escapeHtml(episode.meta.architect_take)}</p>`
                    : ""
            }
</section>
`.trim();

            // Localize week-at-a-glance section
            let summary = weekAtAGlanceHtml;
            if (lang.id !== "en") {
                summary = await _askAI(
                    `Translate the following HTML into ${lang.name} only return the translation: ${weekAtAGlanceHtml}`
                );
            }

            // Load markdown (if you have it) for additional content; optional
            let content = "";
            const apath = path.resolve(edir, "episode.md");
            if (fs.existsSync(apath)) {
                content = fs.readFileSync(apath).toString("utf-8");
            }

            // IDs for embeds (optional)
            let youtubeTag = "";
            if (video?.url) youtubeTag = String(video.url).split("/").pop();
            else console.error(`Missing video ${lang.id} for ${episode.name}`);

            let transistorTag = "";
            let transistorURL = "";
            if (audio?.url) {
                transistorURL = audio.url;
                transistorTag = String(audio.url).split("/").pop();
            } else {
                console.error(`Missing Audio ${lang.id} for ${episode.name}`);
            }

            // Pull pillar article groups + normalize to editorial template shape
            const pillarsRaw = await _getArticles(episode, lang, outputpath);
            const pillarsObj = normalizePillarsForTemplate(episode, pillarsRaw);
            const topStories = pickTopStories(pillarsObj, 4);

            // Deep dive handoff link (optional)
            const deepdiveUrl = episode.assets?.[`${lang.id}/deepdive`]?.url || "";

            // Canonical
            const canonical = `${siteUrl}/${lang.id}/briefs/edw-${episode.number}/`;

            // hreflang URLs (FIXED)
            lang.urls = {};
            for (let k = 0; k < langs.length; k++) {
                lang.urls[langs[k].id] = `${siteUrl}/${langs[k].id}/briefs/edw-${episode.number}/`;
            }

            // Thumbnail handling
            const thumbnail = episode.thumbnail || "thumbnail.png";
            const thumbnailPath = path.resolve(edir, "thumbnail.png");

            // Better plain-text meta description (no escaped HTML)
            const descriptionText = stripHtml(summary).slice(0, 300);

            // Render HTML
            const files = {
                context: {
                    relpath: "../../..",
                    baseDir: source,

                    // Editorial brief inputs
                    brief: {
                        ...episode,
                        date: episode.title || episode.name || "", // used by your template if desired
                        watch: video?.url || "",
                        listen: audio?.url || ""
                    },
                    summary,               // week-at-a-glance HTML (localized)
                    topStories,            // NEW: Top Stories section
                    pillars: pillarsObj,   // NEW: normalized pillars object
                    deepdiveUrl,           // NEW: optional handoff link

                    // optional existing fields (won't hurt)
                    content,
                    youtubeID: youtubeTag,
                    audioID: transistorTag,
                    audioURL: transistorURL,

                    page: {
                        canonical,
                        title: `${lang.newsTitle || "Embracing Digital This Week"} | ${episode.title}`,
                        description: descriptionText
                    },

                    lang,
                    langID: lang.id,
                    thumbnail,
                    episodeName: `edw-${episode.number}`,
                    ogImage: thumbnail
                },
                targets: {
                    "index.html": {template: `${source}/brief.ejs`}
                }
            };

            // Copy thumbnail.png if present

            if (fs.existsSync(thumbnailPath)) {
                files.targets["thumbnail.png"] = {copy: thumbnailPath};
            }

            // Process
            Generator.process(files, outputpath);

            // Store/update blog asset for this language (FIXED URL)
            const artifact = episode.artifacts?.[`${lang.id}/episode.md`];

            if (artifact) {
                const asset = new Asset({
                    name: `${lang.id}/blog`,
                    url: `${siteUrl}/${lang.id}/briefs/edw-${episode.number}/`,
                    artifact,
                    channel: "blog",
                    title: artifact.title || episode.title,
                    summary: stripHtml(summary).slice(0, 400), // store plain text
                    episode
                });

                episode.addToAssets(asset);
                artifact.addToAssets(asset);
            }

            episode.saveMe();
        }
    }

    AEvent.emit("publish.completed", {message: "Publish Finished"});
};
const _deepDivesPage = (episodes, output, source) => {
    let langStr = fs.readFileSync(path.resolve(source, "lang.json"), 'utf-8');
    let langs = JSON.parse(langStr);
    episodes = episodes.sort((a, b) => Number(b.number) - Number(a.number));
    AEvent.emit('publish.start', {message: "Starting publish"});
    for (let i in langs) {
        let lang = langs[i];
        let pepisodes = {};
        for (let j in episodes) {
            let episode = episodes[j];
            if (episode.state === "Published" && episode.artifacts[`${lang.id}/deepdive.html`]) {
                let summary = episode.summary;
                summary = summary.length > 250 ? summary.substring(0, 250) + '..' : summary;
                let dateFormatted = new Date(episode.releaseDate).toLocaleDateString(lang.id, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                pepisodes[j] = {
                    number: episode.number,
                    date: dateFormatted,
                    slug: `edw-${episode.number}/deepdive.html`,
                    image: `edw-${episode.number}/deepdive.png`,
                    title: episode.title,
                    guests: episode.guests,
                    summary: summary,
                    tags: episode.tags,
                    youtubeURL: episode.assets[`${lang.id}/deepdive-video`]?.url || "",
                    audioURL: episode.assets[`${lang.id}/deepdive-audio`]?.url || "",
                }
            }
        }

        let outputpath = path.resolve(output, lang.id, "briefs");
        // check that the episode.md file is there and read it into the content variable.
        files = {
            context: {
                relpath: '../..',
                episodes: pepisodes,
                baseDir: source,
                summary: "This is the home page for the Embracing Digital Podcast. It is a collection of news briefs and articles from the Embracing Digital team.",
                page: {
                    id: 'briefs',
                    canonical: `${SITE_URL}/${lang.id}/briefs/deepdives.html`,
                    title: 'Embracing Digital This Week | Architectural Deep Dives',
                    description: 'Embracing Digital This Week is a multi-language news brief on digital transformation, covering AI, cybersecurity, edge computing, data management, ubiquitous computing, and advanced communications.'
                },
                lang: {
                    ...lang,
                    urls: buildLangUrls(langs, (l) => `/${l.id}/briefs/deepdives.html`)
                },
                langID: lang.id,
                ogImage: `../../assets/images/logo.png`
            },
            targets: {
                'deepdives.html': {template: `${source}/deepdives.ejs`},
            }
        }
        Generator.process(files, outputpath);
    }
    AEvent.emit('publish.completed', {message: "Publish Finished"});
}
const _deepDives = (episodes, output, edwSource) => {
    let langStr = fs.readFileSync(path.resolve(edwSource, "lang.json"), "utf-8");
    let langs = JSON.parse(langStr);

    const siteUrl = SITE_URL;

    for (let e in episodes) {
        for (let li in langs) {
            let lang = langs[li];
            let episode = episodes[e];
            if (episode.state !== "Published") continue;

            const outputpath = path.resolve(output, lang.id, "briefs", `edw-${episode.number}`);
            fs.mkdirSync(outputpath, {recursive: true});

            if (episode.assets[`${lang.id}/deepdive-video`] === undefined) continue;
            if (episode.assets[`${lang.id}/deepdive-audio`] === undefined) continue;
            if (episode.artifacts[`${lang.id}/deepdive.html`] === undefined) continue;
            let artifact = episode.artifacts[`${lang.id}/deepdive.html`];
            const ddHTML = fs.readFileSync(artifact.url, "utf-8");
            episode.slug = `edw-${episode.number}/deepdive.html`;
            episode.image = `edw-${episode.number}/deepdive.png`;

            const files = {
                context: {
                    relpath: "../../..",
                    episode,
                    baseDir: edwSource,
                    page: {
                        id: 'deepdive',
                        canonical: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/deepdive.html`,
                        title: 'Embracing Digital Deep Dive | Digital Transformation Deep Dive',
                        description: 'Embracing Digital Deep Dive is a multi-language deep dive on digital transformation, covering AI, cybersecurity, edge computing, data management, ubiquitous computing, and advanced communications.'
                    },
                    lang: {
                        ...lang,
                        urls: buildLangUrls(langs, (l) => `/${l.id}/briefs/edw-${episode.number}/deepdive.html`)
                    },
                    content: ddHTML
                },
                targets: {
                    'deepdive.html': {template: `${edwSource}/deepdive.ejs`},
                    'deepdive.png': {copy: episode.artifacts[`${lang.id}/thumbnail-DD.png`].url}
                }
            }
            Generator.process(files, outputpath);
            let summary = episode.summary;
            if (artifact) {
                const asset = new Asset({
                    name: `${lang.id}/deepdive-blog`,
                    url: `${siteUrl}/${lang.id}/briefs/edw-${episode.number}/deepdive.html`,
                    artifact,
                    channel: "blog",
                    title: artifact.title || episode.title,
                    summary: stripHtml(summary).slice(0, 400), // store plain text
                    episode
                });

                episode.addToAssets(asset);
                artifact.addToAssets(asset);
            }
            episode.saveMe();
        }
    }
}
const _getArticles = async (episode, lang, output) => {
    const edir = path.resolve(path.dirname(episode.saveFile), "Production", lang.id);
    const artFile = `${edir}/.articles.js`;
    let dirty = false;
    if (fs.existsSync(artFile)) {
        const retVal = require(artFile);
        for (let i in retVal) {
            let pillar = retVal[i];
            for (let j in pillar.articles) {
                let article = pillar.articles[j];
                if (!article.image && !article.imageURL) {
                    if (article.images && article.images[0]) {
                        let aFile = "";
                        article.imageURL = `../../../images/briefs/${episode.id.toLowerCase()}/${path.basename(article.images[0].filename)}`;
                        if (!fs.existsSync(aFile)) {
                            aFile = path.resolve(edir, article.images[0].filename);
                        }
                        let imageDir = path.resolve(output, '..', '..', '..', 'images', 'briefs', episode.id.toLowerCase());
                        fs.mkdirSync(imageDir, {recursive: true});
                        let newFile = path.resolve(imageDir, article.imageURL);
                        try {
                            fs.copyFileSync(aFile, newFile);
                        } catch (e) {
                            console.error("copy error", article.image, newFile, e);
                        }
                    } else {
                        console.error("Missing image for", article.link);
                    }
                }
            }
        }
        if (!retVal[0]) {
            console.log("WARNING: ", retVal[0]);
        }

        return retVal;
    } else {
        const mdFilePath = path.resolve(edir, "episode.md");
        if (!fs.existsSync(mdFilePath)) {
            console.error(`Missing episode.md file at ${mdFilePath}`);
            return null;
        }

        const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
        const pillars = [];
        const lines = mdContent.split('\n');

        let currentPillar = null;
        let currentText = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.startsWith('##')) {
                if (currentPillar) {
                    pillars.push(currentPillar);
                }

                currentPillar = {
                    pillar: line.replace(/^##\s*/, ''),
                    articles: []
                };
                currentText = [];
            } else if (currentPillar) {
                const urlMatches = line.match(/https?:\/\/[^\s]+/g);

                if (urlMatches && urlMatches.length > 0) {
                    const text = currentText.join(' ').trim();
                    if (text) {
                        currentPillar.articles.push({
                            pillar: currentPillar.pillar,
                            text: text,
                            urls: urlMatches
                        });
                    }
                    currentText = [];
                } else if (line.length > 0) {
                    currentText.push(line);
                }
            }
        }

        if (currentPillar) {
            pillars.push(currentPillar);
        }

        fs.writeFileSync(artFile, `module.exports = ${JSON.stringify(pillars, null, 2)};`);

        return pillars;
    }
    return null;
}
const escapeHtml = (s = "") =>
    String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

const stripHtml = (s = "") =>
    String(s).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();


async function _syncGitRepo(repoDir) {
    try {
        // Check for changes
        const status = execSync('git status --porcelain', {cwd: repoDir, encoding: 'utf8'}).trim();
        if (!status) {
            console.log('[git-sync] No changes to commit.');
            return;
        }

        console.log('[git-sync] Changes detected, committing…');

        // Stage everything
        execSync('git add -A', {cwd: repoDir, stdio: 'inherit'});

        // Commit with a timestamped message
        const msg = `Auto publish ${new Date().toISOString()}`;
        execSync(`git commit -m "${msg}"`, {cwd: repoDir, stdio: 'inherit'});

        // Push to the current upstream branch
        execSync('git push', {cwd: repoDir, stdio: 'inherit'});

        console.log('[git-sync] Push complete.');
    } catch (err) {
        console.error('[git-sync] Failed to sync repository:', err.message || err);
    }
}

const publishDate = new Date();

function isInTwoWeekWindow(episode) {
    let releaseDate = episode.releaseDate;

    if (episode.state === 'Published') {
        const dt = new Date(releaseDate);
        const publishDate = new Date();
        const twoWeeksAgo = new Date(publishDate);
        twoWeeksAgo.setDate(publishDate.getDate() - 14);
        return dt >= twoWeeksAgo;
    }
    return false;
}

function serializeEpisode(episode, lang) {

    let guests = {};
    for (let name in episode.guests) {
        let guest = episode.guests[name];
        guests[name] = {name: guest.name, id: guest.id};
    }

    const retval = {
        releaseDate: episode.releaseDate,
        summary: marked(episode?.summary || ''),
        guests: guests,
        listen: episode?.assets[`audio`]?.url || null,
        watch: episode?.assets[`video`]?.url || null,
        image: `${SITE_URL}/${lang.id}/episodes/edt-${episode.number}/${episode.thumbnail}`,
        slug: `${SITE_URL}/${lang.id}/episodes/edt-${episode.number}/index.html`,
        read: `${SITE_URL}/${lang.id}/episodes/edt-${episode.number}/index.html`,
        title: episode.assets[`${lang.id}/blog`]?.title || episode.title
    }
    return retval;
}

function serializeDeepDive(episode, lang) {
    let guests = {};
    for (let name in episode.guests) {
        let guest = episode.guests[name];
        guests[name] = {name: guest.name, id: guest.id};
    }
    let releaseDate = new Date(episode.releaseDate);
    releaseDate.setDate(releaseDate.getDate() + 4);
    const retval = {
        releaseDate: releaseDate,
        summary: marked(episode?.summary || ''),
        guests: guests,
        listen: episode?.assets[`${lang.id}/audio`]?.url || null,
        watch: episode?.assets[`${lang.id}/video`]?.url || null,
        image: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/deepdive.png`,
        slug: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/deepdive.html`,
        read: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/deepdive.html`,
        title: episode.assets[`${lang.id}/blog`]?.title || episode.title
    }
    return retval;
}

function serializeBrief(episode, lang) {
    let guests = {};
    for (let name in episode.guests) {
        let guest = episode.guests[name];
        guests[name] = {name: guest.name, id: guest.id};
    }
    let releaseDate = new Date(episode.releaseDate);
    const retval = {
        releaseDate: releaseDate,
        summary: marked(episode?.summary || ''),
        guests: guests,
        listen: episode?.assets[`${lang.id}/audio`]?.url || null,
        watch: episode?.assets[`${lang.id}/video`]?.url || null,
        image: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/thumbnail.png`,
        slug: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/index.html`,
        read: `${SITE_URL}/${lang.id}/briefs/edw-${episode.number}/index.html`,
        title: episode.assets[`${lang.id}/blog`]?.title || episode.title
    }
    return retval;
}

function serializeLecture(episode, lang) {

    let guests = {};
    for (let name in episode.guests) {
        let guest = episode.guests[name];
        guests[name] = {name: guest.name, id: guest.id};
    }

    const retval = {
        releaseDate: episode.releaseDate,
        summary: marked(episode?.summary || ''),
        guests: guests,
        listen: episode?.assets[`audio`]?.url || null,
        watch: episode?.assets[`video`]?.url || null,
        image: `${SITE_URL}/${lang.id}/lectures/dta-${episode.number}/thumbnail.png`,
        slug: `${SITE_URL}/${lang.id}/lectures/dta-${episode.number}/index.html`,
        read: `${SITE_URL}/${lang.id}/lectures/dta-${episode.number}/index.html`,
        title: episode.assets[`${lang.id}/blog`]?.title || episode.title
    }
    return retval;
}
