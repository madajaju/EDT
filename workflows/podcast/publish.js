const path = require('path');
const fs = require('fs');

module.exports = {
    friendlyName: 'publish',
    description: 'Publish the Podcast',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        id: {
            description: "ID of the podcast",
            type: 'string',
            required: true
        }
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (obj, inputs, env) {

        let podcast = obj;

        let output = path.resolve(`${podcast.baseDirectory}/docs`);
        let source = path.resolve( `${podcast.baseDirectory}/templates`);
        _docDirectory(output, source);
        await _episodes(podcast.episodes, output, source);
        _guests(podcast, output, source);
        _tags(podcast.tags, output, source);
        return ;
    }
};

const _docDirectory = (output, source) => {

    let files = {
        context: {},
        targets: {
            '.': {foldercopy: `${source}/docs`},
        }
    }
    global.Generator.process(files, output);
}

const _episodes = async (episodes, output, source) => {

    let outputpath = path.resolve(`${output}/episodes`);

    episodes.forEach(async (episode) => {
        if(episode._attributes._state === "Published") {
            console.log("Publishing:", episode.number);
            // check that the episode.md file is there and read it into the content variable.
            let edir = path.dirname(episode.saveFile);
            let apath = path.resolve(`${edir}/Production/episode.md`);
            if (fs.existsSync(apath)) {
                episode.content = fs.readFileSync(apath).toString('utf-8');
            } else {
                episode.content = "";
            }
            // check the transcript file is there and read it into the transcript variable.
            apath = path.resolve(`${edir}/Production/episode.mp4.srt`);
            episode.transcript = "<p>";
            if (fs.existsSync(apath)) {
                episode.transcript = "<p>";
                let lines = fs.readFileSync(apath).toString('utf-8').split('\r\n');
                lines.forEach((line) => {
                    const regx = new RegExp('^[0-9]');
                    const regx2 = new RegExp('[A-Z]');
                    if (regx2.test(line[0])) {
                        episode.transcript += '</p>\n<p>';
                    }
                    if (!regx.test(line) && line.length > 0) {
                        episode.transcript += line;
                    }
                });
            }
            episode.transcript += "</p>";
            // YoutubeTag of the video.
            // Get the asset video and get the url.
            // Now strip off the last part.
            if(episode.assets.hasOwnProperty('video')) {
                episode.youtubeTag = episode.assets['video'].url.split('/').pop();
            } else {
                console.log("Video Asset Missing:", episode.title, episode.number);
            }

            // set the thumbnailPath so it can be copied to the destination directory.
            let thumbnailPath = path.resolve(`${episode.dir}/Production/${episode.thumbnail}`);
            let thumbnail = episode.thumbnail || "TBD";
            let transistorTag = episode.assets[`audio`].url.split('/').pop();
            let guests = Object.keys(episode.guests);
            let tags = Object.keys(episode.tags);
            let files = {
                context: {
                    episode: episode,
                    guests: guests,
                    tags: tags,
                    thumbnail: thumbnail,
                    episodeName: "edt-" + episode.number,
                    transistorTag: transistorTag
                },
                targets: {
                    ':episodeName:/episode.md': {template: `${source}/episode.emd`},
                }
            }
            // set the thumbnailPath so it can be copied to the destination directory.
            if (episode.thumbnail) {
                let tPath = path.resolve(`${edir}/Production/${episode.thumbnail}`);
                if (fs.existsSync(tPath)) {
                    files.targets[":episodeName:/:thumbnail:"] = {copy: tPath};
                }
            }
            global.Generator.process(files, outputpath);
        }
    });
}

const _guests = (podcast, output, source) => {
    let outputpath = path.resolve(`${output}/guests`);
    let guests = podcast.guests;
    guests.forEach((guest) => {
        if(guest) {
            let content = guest.bio;
            let thumbnail = guest.thumbnail || "TBD";
            let files = {
                context: {
                    guest: guest,
                    content: content,
                    thumbnail: thumbnail,
                    guestName: guest.name.replace(/\s/g, '-'),
                },
                targets: {
                    ':guestName:.md': {template: `${source}/guest.emd`},
                }
            }
            if (guest.thumbnail) {
                let tPath = guest.getImage();
                if (fs.existsSync(tPath)) {
                    files.targets[":guestName:-:thumbnail:"] = {copy: tPath};
                }
            }
            global.Generator.process(files, outputpath);
        }
    });
}

const _tags = (tags, output, source) => {
    let outputpath = path.resolve(`${output}/tags`);

    tags.forEach((tag) => {

        let files = {
            context: {
                tag: tag,
                tagName: tag.name.replace(/\s/g,'')
            },
            targets: {
                ':tagName:.md': {template: `${source}/tag.emd`},
            }
        }
        global.Generator.process(files, outputpath);
    });
}
