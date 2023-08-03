const path = require('path');
const fs = require('fs');

module.exports = {
    friendlyName: 'generatepdfs',
    description: 'Generate PDFs for the podcast',
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
        let episodes = podcast.episodes;
        for(let i in episodes) {
            let episode = episodes[i];
            await episode.generatepdf();
            AEvent.emit("generatepdf.inprogress", {message: "Episode: " + i});
        }
        AEvent.emit("generatepdf.complete")
        return podcast;
    }
};
