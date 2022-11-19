const mongoose = require('mongoose')
const {Schema} = mongoose

const city = new Schema({

    language: {
        type: String,
        required:true,
        unique : true
    } 
 })

module.exports = mongoose.model('Language', languageSchema)
