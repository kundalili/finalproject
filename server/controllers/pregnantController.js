const Pregnant = require('../models/Pregnant')
const User = require('../models/User')

module.exports.list = async (req, res) => {

    try {
        
        const {userId, username, namesurname, service, 
            city, language, duedate} = req.body
        
        let query = {}
        let queryuser = {}

        if (username) queryuser.username=username
        if (userId) query.userId=userId
        if (namesurname) query.namesurname=namesurname
        if (service) query.service=service
        if (city) query.city=city
        if (language) query.language=language
        if (duedate) query.duedate=duedate
        
        const user = await Pregnant.find(query)
                    .populate({
                        path: 'userId',
                        select: '_uid username email photo'
                    })
       
        res.send({success: true, user})
    } catch (error) {
    
        console.log("🚀 ~ Error in list users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

 module.exports.edit = async (req, res) => {
     try {
        
        const {userId, namesurname, service, connected,
            city, language, availability, duedate} = req.body

        console.log("🚀 ~ edit here: ", req.body)

        if (!userId) {
             res.send({success: false, error: 'Can not edit without a UserId'})
             return
         }

        const filter = { userId: userId};
        const update = {};

        if (userId) update.userId=userId
        if (namesurname) update.namesurname=namesurname
        if (service) update.service=service
        if (city) update.city=city
        if (language) update.language=language
        if (duedate) update.duedate=duedate
        if (connected) update.connected=connected
        if (availability) update.availability=availability
  
    
        let user = await Pregnant.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });

         if (!user) {
             res.send({success: false, error: 'user can not updated'})
             return
         }
       
         res.send({success: true, user: user})
     } catch (error) {
    
         console.log("🚀 ~ Error in edit", error.message)

         res.send({success: false, error: error.message})
        
     }
 }
