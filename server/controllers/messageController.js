const Message = require('../models/Message')
const User = require('../models/User')
const mongoose = require('mongoose');

module.exports.send = async (req, res) => {

    const {from, to, text} = req.body;


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

module.exports.list = async (req, res) => {
    
    let query ={}
    try {
        console.log("list for query:", req.body)

        if (req.body.hasOwnProperty('users')) 
            {
                let u1 =mongoose.Types.ObjectId(req.body.users[0])
                let u2 =mongoose.Types.ObjectId(req.body.users[1])
                
                query = {$or:[{from:u1, to:u2},{from:u2, to:u1}]}
            } 
            
            if (req.body.hasOwnProperty('from')) query= {...query, from: new mongoose.Types.ObjectId(req.body.from)}
            if (req.body.hasOwnProperty('to')) query= {...query, to:new mongoose.Types.ObjectId(req.body.to)}
            if (req.body.hasOwnProperty('fromstate')) query={...query, fromstate:req.body.fromstate}
            if (req.body.hasOwnProperty('tostate')) query={...query, tostate:req.body.tostate}
            if (req.body.hasOwnProperty('fromflag')) query={...query, fromflag:req.body.fromflag}
            if (req.body.hasOwnProperty('toflag')) query={...query, toflag:req.body.toflag}
            if (req.body.hasOwnProperty('text')) query={...query, text:{$regex:req.body.text}}
            
            if (req.body.hasOwnProperty('_id')) query={...query, _id:new mongoose.Types.ObjectId(req.body._id)}  
    
        console.log("calculated query:", query)

        const messages = await Message.find(query)
                                        .populate({
                                            path: 'from',
                                            select: '-password -email'
                                            })  
                                        .populate({
                                            path: 'to',
                                            select: '-password -email'
                                            })
                                        .sort({ date: -1 })  


       // console.log("message list", messages)
       
        res.send({success: true, messages})
       
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
                await upsert(users, {_id:tousr,place:"to", value:sum})
            } else {
                await upsert(users, {_id:fromusr,place:"from", value:sum})
            }
        }

        async function upsert(array, item) { // (1)
           // console.log("upsert", array, item)
            const i = array.findIndex(_item => _item._id === item._id);
           // console.log("indexxxx:", i)
            if (i > -1) array[i][item.place] = item.value; // (2)
            else { 
                    let myobj={_id:item._id}
                    if (item.place==='from') {
                        myobj["to"]=0
                        myobj["from"]=item.value
                    } else {
                        myobj["to"]=item.value
                        myobj["from"]=0
                    }
                    array.push(myobj);
                }
        }

        //console.log("collected user list", users)
        
        let myuser
        const findUsers = async (item,idx)=>{
          // console.log("user findusers:",item.userId, req.body.userId )
            let detailed ={}

            myuser= await User.findById(item._id)
            //console.log("found user", myuser, item.userId)

            detailed=await users[idx]
            detailed["photo"]=myuser?.photo ? myuser.photo : ""
            detailed["username"]=myuser?.username
            //console.log("new data", detailed)
            return detailed
        }

        for (let idx=0;idx<users.length;idx++) {
            users[idx]= await findUsers(users[idx],idx)
        }
        res.send({success: true, data:users})
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
            
        const {fromstatus, tostatus, fromflag, toflag, _id} = req.body;
        if (!_id) {
            res.send({success: false, error: 'id must be supplied'})
        }
        const query={}
        if (fromstatus) query.fromstatus =fromstatus
        if (tostatus) query.tostatus =tostatus
        if (fromflag) query.fromflag =fromflag
        if (toflag) query.toflag =toflag

        console.log("update", query)

        const message = await Message.findByIdAndUpdate(req.body._id, query, {new: true})
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

