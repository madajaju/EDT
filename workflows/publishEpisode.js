const path = require('path');
const fs = require;

module.exports = {
    friendlyName: 'publishEpisode',
    description: 'Publish an Episode',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (inputs, env) {

        return obj;
    }
};

const _docDirectory = (output) => {

    let files = {
        context: {
        },
        targets: {
            'docs': {foldercopy: 'templates/docs'},
        }
    }
    global.Generator.process(files, output);
}

const _episodes = (episodes, output) => {

    episodes.forEach( (episode) => {
      // Check that the episode.md file is there and read it into the content variable.
        let apath = path.resolve(`${episode.dir}/Production/epsiode.md`);
        if(fs.exisist)
      episode.conent = fs.readFileSync(episode.dir)
    // Check the transcript file is there and read it into the transcript variable.
        episode.transcript = fs.readFileSync(episode.dir)
    let files = {
        context: {

        },
        targets: {
            'docs': {foldercopy: 'templates/docs'},
        }
    }
    });
}

const _guests = (guests, output) => {

}

const _tags = (tag, output) => {

}
