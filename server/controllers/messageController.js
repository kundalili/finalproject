const Message = require('../models/Message')
const User = require('../models/User')
const mongoose = require('mongoose');

module.exports.send = async (req, res, next) => {

    const {from, to, text} = req.body;
    console.log("next:",next)

    try {
        console.log("🚀 ~ message send: ", req.body)

        if (!from || !to || !text ) {
            console.log("data", req.body)
            res.send({success: false, error: 'from, to and text should not be empty'})
            return
        }
        
        const messageCreated = await Message.create( req.body)
        console.log("🚀 ~ messageCreated", messageCreated)
        res.send({success: true})

    } catch (error) {
        console.log("Error: creating message", error.message)
        res.send({success: false, error: error.message})

    }
  
}

module.exports.list = async (req, res, next) => {
    console.log("next:",next)
    try {
        console.log(req.body, req.body.hasOwnProperty('userId'))

        if (!req.body.hasOwnProperty('from')&&!req.body.hasOwnProperty('to')) {
            console.log(req.body)
            res.send({success: false, messages:["from or to info is a must"]})
        } else {    

        const messages = await Message.find(req.body)
                                        .populate({
                                            path: 'from',
                                            select: '-password -email'
                                            })  
                                        .populate({
                                            path: 'to',
                                            select: '-password -email'
                                            })
                                        .sort({ date: -1 })  


        //console.log("query and list", messages, req.body)
       
        res.send({success: true, messages})
       }
    } catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}


module.exports.group = async (req, res) => {

    
    console.log("🚀 ~ message group: ", req.body)

    const query=[]



    if (req.body.userId) {
        query.push({
            $match: { $or:[ 
                        {from: new mongoose.Types.ObjectId(req.body.userId)},
                        {to: new mongoose.Types.ObjectId(req.body.userId)}
                        ]
                    }
        })
    } 
    
     query.push({ $group: 
                    { 
                        _id: {from:"$from", to:"$to"},
                        sum: { $sum: 1 } 
                    } 
                })
     
       
    console.log("query:",query)
    
    try {
        
        if (!req.body.hasOwnProperty('userId')) {
            console.log(req.body )
            res.send({success: false, messages:["userId is a must"]})
        } else {

        const messages = await Message.aggregate(query)
       
        //console.log("🚀 ~ messages", messages)

        let users=[] //temp array to collect responders
        
        messages.map(item=>{createusers(item)})

        async function createusers(item){
            const {from, to} = item._id
            const sum=item.sum
            const fromusr = from.toString()
            const tousr = to.toString()

           // console.log("item:", item)
           // console.log("from to sum", fromusr, tousr, sum)
            
            if (fromusr===req.body.userId) {
                await upsert(users, {userId:tousr,place:"to", value:sum})
            } else {
                await upsert(users, {userId:fromusr,place:"from", value:sum})
            }
        }

        async function upsert(array, item) { // (1)
           // console.log("upsert", array, item)
            const i = array.findIndex(_item => _item.userId === item.userId);
           // console.log("indexxxx:", i)
            if (i > -1) array[i][item.place] = item.value; // (2)
            else { 
                    let myobj={userId:item.userId}
                    if (item.place==='from') {
                        myobj["from"]=item.value
                    } else myobj["to"]=item.value
                    array.push(myobj);
                }
        }

        //console.log("collected user list", users)
        
        let userdetay = []
        let myuser
        const findUsers = async (item,idx)=>{
          // console.log("user findusers:",item.userId, req.body.userId )
            let detailed ={}

            myuser= await User.findById(item.userId)
            //console.log("found user", myuser, item.userId)

            detailed=await users[idx]
            detailed["photo"]=myuser?.photo ? myuser.photo : ""
            detailed["username"]=myuser.username
            //console.log("new data", detailed)
            return detailed
        }

        for (let idx=0;idx<users.length;idx++) {
            users[idx]= await findUsers(users[idx],idx)
        }
        res.send({success: true, users})
      }

    } catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}


module.exports.delete = async (req, res) => {


    console.log("🚀 ~ message will be deleted: ", req.body._id)
    
    try {
        
        const messages = await Message.findOneAndDelete(req.body)   

        console.log("🚀 ~ messages", messages)
       
        res.send({success: true, messages})
    } catch (error) {
    
        console.log("🚀 ~ Error in delete messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.edit = async (req, res) => {
    try {
       
        console.log("🚀 ~ edit here: ", req.body)

        const {status, flag, _id} = req.body;

        if (!_id) {
            res.send({success: false, error: 'id must be supplied'})

            return
        }

        const message = await Message.findByIdAndUpdate(req.body._id, {status, flag}, {new: true})
        console.log("🚀 ~ Message", message)

        if (!message) {
            res.send({success: false, error: 'message not found'})
            return
        }
      
        res.send({success: true})
    } catch (error) {
   
        console.log("🚀 ~ Error in edit", error.message)

        res.send({success: false, error: error.message})
       
    }

}

