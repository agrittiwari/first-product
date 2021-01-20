const mongoose= require('mongoose');
const ContentSchema = mongoose.Schema({
    
    register: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registers'
    },

    podcast: [
        {
            link: {
                type:String
            },
            heading: {
                type:String
            },
            description: {
                type:String
            }
        }
    ],

    video: [
        {
            link: {
                type:String
            },
            heading: {
                type:String
            },
            description: {
                type:String
            }
        }
    ]
})

module.exports = mongoose.model('content', ContentSchema)