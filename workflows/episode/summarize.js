const path = require('path');
const fs = require('fs');

module.exports = {
    friendlyName: 'summarize',
    description: 'Summarize the episode transcript',
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
        for(let aname in env.req.body) {
            args[aname]= env.req.body[aname];
        }
        let podcast = obj;
        let epi = Episode.find(args.episode);
        let artfile = null;
        let mdfile = null;
        let artifacts = epi.artifacts;
        for(let i in artifacts) {
            let artifact = artifacts[i];
            if(artifact.ext === '.srt') {
                artfile = artifact.url;
            }
            if(artifact.ext === '.md') {
                mdfile = artifact.url;
            }
        }
        let srtpath = path.resolve(artfile);
        let mdpath = path.resolve(mdfile);
        await summarize(srtpath, mdpath);
        AEvent.emit('summarize.complete', {obj: obj.id, message: 'Summarized Complete'});
        return epi;
    }
};

async function summarize(srtfile, mdfile) {
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
            if (count > 250) {
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
            const res = await ask(`Write a 200 word informative 2nd person blog post for this podcast transcript: ` + groups[i]);
            console.log("Response:", res, '\n');
            AEvent.emit('summarize.inprogress', {message: `${Math.floor(i/groups.length)*100}% Complete`});
            resultString += res + '\n\n';
        }
        fs.writeFileSync(mdfile, resultString);
    }
    catch(e) {
        console.error("Problem summarize srt!", e);
    }
}

async function ask(message) {
    const completion = await global.openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: message,
                name: 'guth',
            }
        ]
    });
    return completion.data.choices[0].message.content;
};
