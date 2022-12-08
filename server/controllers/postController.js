const Post = require('../models/Post')

const mongoose = require('mongoose');

module.exports.send = async (req, res) => {

    const {userId, text, parentId} = req.body;


    try {
        console.log("🚀 ~ post send: ", req.body)

        if (!userId || !text ) {
            console.log("data", req.body)
            res.send({success: false, error: 'userId and text should not be empty'})
            return
        }
        
        const postCreated = await Post.create( req.body)
        console.log("PostCreated", postCreated)
        res.send({success: true})

    } catch (error) {
        console.log("Error: creating post", error.message)
        res.send({success: false, error: error.message})

    }
  
}

module.exports.list = async (req, res) => {

    let parentId = req.body.parentId;

    let query = (parentId)
                ?{parentId:parentId}
                :{parentId:""}
    console.log("query:", query)

    try{
        const posts = await Post.find(query)
                                        .populate({
                                            path: 'userId',
                                            select: '-password -email'
                                            })  
                                        .sort({ date: -1 })  


        //console.log("query and list", messages, req.body)
       
        res.send({success: true, posts})
       }
     catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.delete = async (req, res) => {

    const _id = req.query._id;

    try{
        if(_id) {
            const posts = await Post.findByIdAndDelete()
        } else res.send("You can not delete without an post_id")
      
        res.send({success: true})
       }
     catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.like = async (req, res) => {

    const {_id, userId} = req.body;

    try {
       if (!userId || !_id ) {
            res.send({success: false, error: 'userId and post_id should not be empty'})
            return
        }
        
        let postLiked = await Post.findById(req.body._id)
        if (postLiked._id) {
            let i= postLiked.likes.find(a => a === userId)
            if (i) {
                postLiked.likes.splice(i,1)
             } else postLiked.likes.push(userId)
            postLiked= await Post.findByIdAndUpdate({_id:_id},{likes:postLiked.likes},{new: true}) 
        }

        res.send({success: true, data:postLiked})

    } catch (error) {
        console.log("Error: creating post", error.message)
        res.send({success: false, error: error.message})

    }
  
}

module.exports.diduserlike = async (req, res) => {

    const {_id, userId} = req.body;

    try {
       if (!userId || !_id ) {
            res.send({success: false, error: 'userId and post_id should not be empty'})
            return
        }
        
        let postLiked = await Post.findById(req.body._id)
        if (postLiked._id) {
            let i= postLiked.likes.find(a => a === userId)
            if (i) {
                res.send({success: true, data:true})
             } else res.send({success: true, data:false})
 
        }
    } catch (error) {
        console.log("Error: checking post likes", error.message)
        res.send({success: false, error: error.message})

    }
  
}


module.exports.updaterights = async (req, res) => {

    const {_id, cancomment, canlike} = req.body;

    try {
       if (!_id ) {
            res.send({success: false, error: 'post_id should not be empty'})
            return
        }
        
        const updatedata = req.body
        delete updatedata._id
        const postupdate= await Post.findByIdAndUpdate({_id:_id},updatedata,{new: true}) 
        
        res.send({success: true, data:postupdate})

    } catch (error) {
        console.log("Error: creating post", error.message)
        res.send({success: false, error: error.message})

    }
  
}