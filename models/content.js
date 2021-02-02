const mongoose= require('mongoose');
const ContentSchema = mongoose.Schema({
    
    register: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
    },

    podcast: [
        {
            podcast_link: {
                type: String
                
            },
            podcast_heading: {
                type: String,
                required: function ()
                {
                    return this.podcast_link != null
                }
            },
            podcast_description: {
                type: String,
                required: function ()
                {
                    return this.podcast_link != null
                }
            }
        }
    ],
    about: {
        type:String,
    },
    video: [
        {
            video_link: {
                type:String
            },
            video_heading: {
                type: String,
                required: function ()
                {
                    return this.video_link != null
                }
            },
            video_description: {
                type: String,
                    required: function ()
                {
                    return this.video_link != null
                }
            }
        }
    ]
})

module.exports = mongoose.model('content', ContentSchema)