const lunr = require('lunr');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

main();

function main() {
    let index = {};
    console.log("Indexing Episodes");
    indexEpisodes(index);
    console.log("Indexing Briefs");
    indexBriefs(index);
    console.log("Indexing guests");
    indexGuests(index);
    console.log("Documents Found:", index.length);
    for(let lang in index) {
        console.log(`Building Index for ${lang}`);
        let idx = lunr(function () {
            this.ref('id')
            this.field('tags')
            this.field('body')
            this.field('guests')
            this.field('summary')
            console.log("Building Master Index");
            index[lang].forEach(function (doc) {
                this.add(doc);
            }, this);
        });
        console.log("Saving Index");
        fs.writeFileSync(`./docs/assets/js/lunr-index-${lang}.json`, JSON.stringify(idx))
        fs.writeFileSync(`./docs/assets/js/docs-${lang}.json`, JSON.stringify(index[lang]));
    }
}

function indexEpisodes(index) {
    let episodes = fs.readdirSync('./docs/episodes');
    for(let i in episodes) {
        let langs = fs.readdirSync(`./docs/episodes/${episodes[i]}`);
        for(let j in langs) {
            let lang = langs[j]
            try {
                let mdText = fs.readFileSync(`./docs/episodes/${episodes[i]}/${lang}/episode.md`, 'utf-8');
                // Now read the file. Get the header of the file and run it through YAML parser
                let sections = mdText.split('---');
                let header = yaml.load(sections[1]);
                if(!index.hasOwnProperty(lang)) {
                    index[lang] = [];
                }
                index[lang].push({
                    "id": index[lang].length,
                    "type": "Episode",
                    "title": header.title,
                    "tags": header.tags,
                    "body": sections[3],// sections[1] is links to audio and video
                    "guests": header.guests,
                    "link": `/${header.permalink}`,
                    "image": `./episodes/${episodes[i]}/${lang}/${header.image}`,
                    "lang": lang,
                    "summary": header.summary
                });
            }
            catch(e) {
            }
        }
    }
}

function indexBriefs(index) {
    let episodes = fs.readdirSync('./docs/briefs');
    for(let i in episodes) {
        let langs = fs.readdirSync(`./docs/briefs/${episodes[i]}`);
        for(let j in langs) {
            let lang = langs[j]
            try {
                let mdText = fs.readFileSync(`./docs/briefs/${episodes[i]}/${lang}/episode.md`, 'utf-8');
                // Now read the file. Get the header of the file and run it through YAML parser
                let sections = mdText.split('---');
                // Remove any images
                let body = "";
                let bodyArray = sections[3].split('\n');
                for(let s in bodyArray) {
                    if(!bodyArray[s].includes('<img')) {
                       body += bodyArray[s] + '\n';
                    }
                }
                let header = yaml.load(sections[1]);
                header.title = `${header.title.getFullYear()}-${header.title.getMonth()+1}-${header.title.getDate()}`;
                if(!index.hasOwnProperty(lang)) {
                    index[lang] = [];
                }
                index[lang].push({
                    "id": index[lang].length,
                    "type": "News Brief",
                    "title": header.title,
                    "tags": header.tags,
                    "body": body,
                    "guests": header.guests,
                    "link": `/${header.permalink}`,
                    "image": `./briefs/${episodes[i]}/${lang}/${header.image}`,
                    "lang": lang,
                    "summary": header.summary
                });
            }
            catch(e) {
            }
        }
    }
}

function indexGuests(index) {
    let guests = fs.readdirSync('./docs/guests');
    for(let i in guests) {
        let guestFile = guests[i];
        if(path.extname(guestFile) === '.md') {
            try {
                let mdText = fs.readFileSync(`./docs/guests/${guestFile}`, 'utf-8');
                // Now read the file. Get the header of the file and run it through YAML parser
                let sections = mdText.split('---');
                // Remove any images
                let body = "";
                let bodyArray = sections[2].split('\n');
                for(let s in bodyArray) {
                    if(!bodyArray[s].includes('<img')) {
                        body += bodyArray[s] + '\n';
                    }
                }
                let header = yaml.load(sections[1]);
                if(!index.hasOwnProperty(lang)) {
                    index[lang] = [];
                }
                index[lang].push({
                    "id": index[lang].length,
                    "title": header.title,
                    "tags": "",
                    "body": body,
                    "guests": `${header.title}`,
                    "link": `/guests/${guestFile.replace('.md','.html')}`,
                    "image": `./guests/${header.img}`,
                    "lang": "en",
                    "summary": header.title,
                });
            }
            catch(e) {
            }
        }
    }
}
