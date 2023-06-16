module.exports = {
    friendlyName: 'promote',
    description: 'Promote an Episode',
    static: true, // True is for Class methods. False is for object based.
    inputs: {
        episode: {
            type: "string",
            required: true,
            description: "ID of the episode",
        },
        channel: {
            type: 'string',
            required: true,
            description: "Name of the channel to promote on."
        },
        asset: {
            type: 'string',
            required: true,
            description: "ID of the asset."
        }
    },

    exits: {
        success: {},
        json: {},
        notFound: {
            description: 'No item with the specified ID was found in the database.',
        }
    },

    fn: function (obj, inputs, env) {
        // Publish on SoundCloud
        // Publish on IntelYouTube
        //
        let args = inputs;
        for(let aname in env.req.body) {
            args[aname]= env.req.body[aname];
        }
        // let podcast = obj;
        let channel = Channel.find(args.channel);
        let asset = Asset.find(args.asset);
        channel.promoteAsset({
            asset: asset,
            text: args.text,
            to: args.to
        });
        return episode;
    }
};
