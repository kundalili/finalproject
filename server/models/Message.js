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

    attachments :{
        type: Array,  
        required: true,
        default: []
    },

    date: {
        type: Date,
        required: true,
        default: Date.now 
    },

    status:{
        type: Array,  
        required: true,
        default: [1,0]
    },

    flag:{
        type: Array,  
        required: true,
        default: [0,0]
    }

 })

module.exports = mongoose.model('Message', messageSchema)
