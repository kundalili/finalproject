const mongoose = require('mongoose')
const {Schema} = mongoose

const fileSchema = new Schema({

    name: {
        type: String,
        required:true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now 
    },
 })

module.exports = mongoose.model('File', fileSchema)
