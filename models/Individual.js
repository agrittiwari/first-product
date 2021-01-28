const mongoose = require('mongoose')
const Register = require('./Register')
const IndividualSchema = new mongoose.Schema({

    register: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
    },
    userPortfolio: {
        
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    location: {
        type:String
    }
    ,
    bio: {
        type:String
    },
    blogs: {
        hashnodeUsername: {
            type:String
        },
        mediumUsername: {
            type:String
        },
        devtoUsername: {
            type:String
        }
    },
    socials: {
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        githubUsername: {
            type: String
        },
        workEmail: {
            type: String
        },
    },
    experience: [
        {
            title: {
                type: String,
                required:true
            },
            company: {
                type: String,
                required:true
            },
            from:{
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type:String
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
      
})

module.exports = mongoose.model('individual',IndividualSchema)