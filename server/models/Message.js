const mongoose = require('mongoose')
const {Schema} = mongoose



const messageSchema = new Schema({

    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } ,

    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
