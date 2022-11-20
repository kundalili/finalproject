const Midwife = require('../models/Midwife')
const User = require('../models/User')

module.exports.list = async (req, res) => {

    try {
        
        const {userId, username, namesurname, service, 
            city, language, availability, since, about} = req.body
        
        let query = {}
        let queryuser = {}

        if (username) queryuser.username=username
        if (userId) query.userId=userId
        if (namesurname) query.namesurname=namesurname
        if (service) query.service=service
        if (city) query.city=city
        if (language) query.language=language
        if (availability) query.availability=availability
        if (since) query.since=since
        if (about) query.about=about


        const user = await Midwife.find(query)
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
        
        const {userId, namesurname, service, 
            city, language, availability, since, about} = req.body

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
        if (since) update.since=since
        if (about) update.about=about
        if (availability) update.availability=availability
  
    
        let user = await Midwife.findOneAndUpdate(filter, update, {
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
