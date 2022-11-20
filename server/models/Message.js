const mongoose = require('mongoose')
const {Schema} = mongoose



const messageSchema = new Schema({

    from: {
        type: String,
        required:true
    } ,

    to: {
        type: String,
        required:true
    },

    text: {
        type: String,
        required:true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now 
    }

 })

module.exports = mongoose.model('Message', messageSchema)
