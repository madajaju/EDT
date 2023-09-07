const path = require('path');
const fs = require;

module.exports = {
    friendlyName: 'createEpisode',
    description: 'Create an Episode',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        episode: {
            type: "string",
            required: true,
            description: "ID of the episode",
        },
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (obj, inputs, env) {
        // let podcast = obj;
        let episode = Episode.find(inputs.episode);
        // Check that all of the assets required are published.
        // This should be blog, audio, and video.
        if(!episode.assets.hasOwnProperty('blog')) {
            episode.addToAssets({
                iname:'blog',
                url:`https://www.embracingdigital.org/episode-EDT${episode.number}`,
                title: episode.title,
                channel: "blog",
                artifact: "episode.md"
            });
        }
        if(!episode.assets.hasOwnProperty('audio')) {
            console.log("Need to publish the audio file");
        }
        if(!episode.assets.hasOwnProperty('video')) {
            console.log("Need to publish the video file");
        }
        episode.state = "Published";
        episode.saveMe();
        return episode;
    }
};

