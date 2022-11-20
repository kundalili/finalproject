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
        console.log("Error: 1", error.message)
        res.send({success: false, error: error.message})

    }
  
}

module.exports.list = async (req, res) => {

    try {
        
        const {from, to, text,  date} = req.body
        
        let query = {}

        if (from) query.from=from
        if (to) query.to=to
        if (text) query.text=text
        if (date) query.date=date

        const messages = await Message.find(query)   

        console.log("🚀 ~ messages", messages)
       
        res.send({success: true, messages})
    } catch (error) {
    
        console.log("🚀 ~ Error in list users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

