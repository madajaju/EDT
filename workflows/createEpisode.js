const path = require('path');
const fs = require;
const Generator = require('ailtire/src/Documentation/Generator.js');

module.exports = {
    friendlyName: 'createEpisode',
    description: 'Create an Episode',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        name: {
            type: "string",
            required: true,
            description: "Name of the episode",
        },
        number: {
            type: "string",
            required: false,
            description: "Number of the episode"
        },
        guests: {
            type: "string",
            required: false,
            description: "Guest of the show. Host will be added."
        },
        summary: {
            type: "string",
            required: false,
            description: "summary of what the episode will be about."
        }
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {
        let output = path.resolve(`${podcast.baseDirectory}/2023/EDT-${inputs.number}`);
        let source = path.resolve(`${podcast.baseDirectory}`);
        _generateEpisode(output, source, inputs);
        return podcast;
    }
};

const _generateEpisode = (output, source, inputs) => {
    let guests = [];
    if(inputs.guests) {
       guests = inputs.guests.split(/,/);
    }
    guests.push("Darren W Pulsipher");
    console.log("Generate:", output);
    console.log("Source:", source);

    let files = {
        context: {
            name: inputs.title,
            number: inputs.number,
            summary: inputs.summary,
            guests: guests,
        },
        targets: {
            'EDTBase.prproj': {copy: `${source}/Base/EDT-Base2023.prproj`},
            'EDTShort.prproj': {copy: `${source}/Base/EDT-Short2023.prproj`},
            '.episode.js': {template: `${source}/templates/.episode.ejs`},
            'Production/episode.md': {template: `${source}/templates/_episode.emd`},
        }
    }
    Generator.process(files, output);
}
