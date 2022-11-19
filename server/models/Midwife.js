const mongoose = require('mongoose')
const {Schema} = mongoose



const midwifeSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    namesurname: {
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
