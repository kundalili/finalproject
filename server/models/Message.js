const mongoose = require('mongoose')
const {Schema} = mongoose



const message = new Schema({

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


 })

module.exports = mongoose.model('Message', messageSchema)
