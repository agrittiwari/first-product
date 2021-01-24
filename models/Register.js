const mongoose = require('mongoose');
const RegisterSchema =new mongoose.Schema({
    userPortfolio: {
        type: String,
        required: true
    },
    name: {
        type:String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
        
    },
    Date: {
        type: Date,
        default: Date.now()
    }
})
  
module.exports = mongoose.model('register', RegisterSchema)