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
   
    verified: {
        type: Boolean,
        default: false
    },
    resetToken: {
        type: String
    },
    name: {
        type: String,
        default:""
    } ,

    service: {
        type: Array,
        default:[]
    },

    city: {
        type: Array,
        default:[]
    },

    language: {
        type: Array,
        default:[]
    },

    photo: {
        type: String,
        default:""
    },

    availability: {
        type: Array,
        default:[]
    },

    about: {
        type: String,
        default:""
    },

    since: {
        type: Number
    },
    duedate: {
        type: Date
    }

})

module.exports = mongoose.model('User', userSchema)
