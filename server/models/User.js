const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({

    username: {
        type: String,
        required:true,
        unique:true
    } ,

    email: {
        type: String,
        required:true,
        unique:true  
    },

    password: {
        type: String,
        required: true,
    },
    
    type: {
        type: Number,
        required: true,
    },
    
    photo: {
        type: String,
        required: false,
        default:""
    },

    fmessages: {
        type: Array,
        required: false,
        default:[]
    }

})

module.exports = mongoose.model('User', userSchema)
