const mongoose = require('mongoose')
const {Schema} = mongoose



const midwifeSchema = new Schema({

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

    availability: {
        type: Array
    },

    about: {
        type: Array
    },

    since: {
        type: Date
    },  


})

module.exports = mongoose.model('Midwife', midwifeSchema)
