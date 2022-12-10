const mongoose = require('mongoose')
const {Schema} = mongoose



const messageSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    } ,

    parentId: {
        type:String,
        default:''
    },

    text: {
        type: String,
        required:true
    },

    canComment:{
        type: Boolean,  
        default: true
    },

    likes:{
        type: Array,  
        default: []
    },
    
    canLike:{
        type: Boolean,  
        default: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now 
    },
    attachments:{
        type: Array,  
        default: []
    },
    numberOfComments:{
        type: Number,  
        default: 0
    }

 },
 { timestamps: true })

module.exports = mongoose.model('Post', messageSchema)
