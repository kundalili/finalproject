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

    fromstatus:{
        type: Number,  
        default: 1
    },

    tostatus:{
        type: Number,  
        default: 0
    },


    fromflag:{
        type: Number,  
        default: 0
    },
    
    toflag:{
        type: Number,  
        default: 0
    }

 })

module.exports = mongoose.model('Message', messageSchema)
