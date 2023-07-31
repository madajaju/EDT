const path = require('path');
const fs = require('fs');

module.exports = {
    friendlyName: 'summarizeShorts',
    description: 'Summarize the shorts of the episode transcript.',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        episode: {
            type: "string",
            required: true,
            description: "Name of the episode",
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: async function (obj, inputs, env) {
        let args = inputs;
        for (let aname in env.req.body) {
            args[aname] = env.req.body[aname];
        }
        let epi = Episode.find(args.episode);
        let artifacts = epi.artifacts;
        let i = 0;
        AEvent.emit('summarize.start', {message: `Starting`});
        let artifactsLength = Object.keys(artifacts).length;
        for (let aname in artifacts) {
            i++;
            let artifact = artifacts[aname];
            if (aname.includes('short') && artifact.ext === '.srt') {
                let artfile = path.resolve(artifact.url);
                let [summary, text] = await summarize(artfile);
                artifact.summary = text;
                let shortmp4 = aname.replace('srt', 'mp4');
                if (artifacts.hasOwnProperty(shortmp4)) {
                    artifacts[shortmp4].summary = summary;
                    artifacts[shortmp4].title = epi.title + "- #" + shortmp4.replace('mp4', '');
                }
                AEvent.emit('summarize.inprogress', {message: `${Math.floor((i / artifactsLength) * 100)}% Complete`});
            }
        }
        AEvent.emit('summarize.complete', {obj: obj.id, message: 'Summarized Complete'});
        epi.saveMe();
        return epi;
    }
};

async function summarize(srtfile) {
    try {
        let str = fs.readFileSync(srtfile).toString('utf-8');
        let groups = [];
        let lines = str.split('\r\n');
        let totalString = "";
        let count = 0;
        for (let i in lines) {
            let line = lines[i];
            if (line.length > 0) {
                if (!/^[0-9]/.test(line)) {
                    count++;
                    totalString += line + " ";
                }
            }
            if (count > 225) {
                count = 0;
                groups.push(totalString);
                totalString = "";
            }
        }

        if (totalString.length > 0) {
            groups.push(totalString);
        }
        let resultString = "";
        for (let i in groups) {
            const res = await ask(groups[i]);
            AEvent.emit('summarize.inprogress', {message: `${Math.floor(i / groups.length) * 100}% Complete`});
            resultString += res;
        }
        return [resultString, groups.join(' ').replaceAll(/\r/g, ' ').replaceAll(/\n/g, '')];
    } catch (e) {
        console.error("Problem summarize srt!", e);
    }
}

async function ask(message) {
    while (1) {
        try {

            const completion = await global.openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: 'system',
                        content: "When asked by the user, summarize the transcript for a youtube video short of the Podcast Embracing Digital Transformation with host Darren Pulsipher. Make the response playful and informative."
                    },
                    {
                        role: 'user',
                        content: message,
                        name: 'guthsummarize',
                    }
                ]
            });
            console.log("Results:", completion.data.choices);
            return completion.data.choices[0].message.content;
        } catch (e) {
            console.error(" Failed to respond:", e.response.status);
            console.error(" Failed to respond:", e.response);
            await new Promise(resolve => setTimeout(resolve, 2000))
        }
    }
};
