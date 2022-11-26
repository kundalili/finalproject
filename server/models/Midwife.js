const mongoose = require('mongoose')
const {Schema} = mongoose



const midwifeSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    name: {
        type: String,
        required:true,
    } ,

    service: {
        type: Array
    },

    city: {
        type: String
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
        type: String
    },

    since: {
        type: Number
    },  


})

module.exports = mongoose.model('Midwife', midwifeSchema)
