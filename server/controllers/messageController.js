const Message = require('../models/Message')

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


    console.log("🚀 ~ message list: ", req.body)
    
    try {
        
        const messages = await Message.find(req.body)
                                        .populate({
                                            path: 'from',
                                            select: '_uid username email photo'
                                            })  
                                        .populate({
                                            path: 'to',
                                            select: '_uid username email photo'
                                            })  


        console.log("🚀 ~ messages", messages)
       
        res.send({success: true, messages})
    } catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.group = async (req, res) => {


    console.log("🚀 ~ message group: ", req.body)
    
    try {
        
        const messages = await Message.aggregate(req.body)


        console.log("🚀 ~ messages", messages)
       
        res.send({success: true, messages})
    } catch (error) {
    
        console.log("🚀 ~ Error in list messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}


module.exports.delete = async (req, res) => {


    console.log("🚀 ~ message will be deleted: ", req.body)
    
    try {
        
        const messages = await Message.findOneAndDelete(req.body)   

        console.log("🚀 ~ messages", messages)
       
        res.send({success: true, messages})
    } catch (error) {
    
        console.log("🚀 ~ Error in delete messages", error.message)

        res.send({success: false, error: error.message})
        
    }
}

