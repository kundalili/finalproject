const mongoose = require('mongoose')
const {Schema} = mongoose



const pregnantSchema = new Schema({

    userId: {
        type: String,
        required:true,
        unique:true
    } ,
    
    name: {
        type: String,
        required:true,
    } ,

    service: {
        type: Array
    },

    city: {
        type: Array
    },

    language: {
        type: Array
    },

    photo: {
        type: String
    },

    connected: {
        type: Array
    },

    about: {
        type: Array
    },

    duedate: {
        type: Date
    },  


})

module.exports = mongoose.model('Pregnant', pregnantSchema)
