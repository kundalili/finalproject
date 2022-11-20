const User = require('../models/User')

module.exports.register = async (req, res) => {

    const {email, username, password} = req.body;


    try {
        console.log("🚀 ~ register here: ", req.body)

        const {email, username, password} = req.body;

        if (!email || !username || !password ) {
            console.log("data", req.body)
            res.send({success: false, error: 'validation failed'})

            return
        }
        
        const userCreated = await User.create( req.body)
        console.log("🚀 ~ userCreated", userCreated)
        res.send({success: true})

    } catch (error) {
        console.log("Error: 1", error.message)
        res.send({success: false, error: error.message})

    }
  
}

module.exports.list = async (req, res) => {

    try {
        
        const {_id, username, email, type, namesurname, service, 
            city, language, availability, since, about, duedate} = req.body
        
        let query = {}
        let querymidwife = {}
        let querypregnant = {}

        if (_id) query._id=_id
        if (username) query.username=username
        if (email) query.email=email
        if (type) query.type=type

        const users = await User.find(query)   
        
        

       
        console.log("🚀 ~ users", users)
       
        res.send({success: true, users})
    } catch (error) {
    
        console.log("🚀 ~ Error in list users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

 module.exports.edit = async (req, res) => {
     try {
        
         console.log("🚀 ~ edit here: ", req.body)

         const {username, email, password} = req.body;

         if (!(email || !username || !password )) {
             res.send({success: false, error: 'validation failed'})

             return
         }

         const user = await User.findByIdAndUpdate(req.body._id, {email, username, password}, {new: true})
         console.log("🚀 ~ user", user)

         if (!user) {
             res.send({success: false, error: 'user not found'})
             return
         }
       
         res.send({success: true})
     } catch (error) {
    
         console.log("🚀 ~ Error in edit", error.message)

         res.send({success: false, error: error.message})
        
     }

}

module.exports.login = async (req, res) => {

        try {
            
            console.log("🚀 ~ login here: ")
    
            const {email, username, password} = req.body // emailOrUser, password
    
            if ((!email && !username ) || !password) { // !emailOrUser || !password
                res.send({success: false, error: 1})
                return
            }
    
            const userFound = await User.find({
                $or: [{username: username}, {email: email}], //$or: [{username: emailOrUser}, {email: emailOrUser}]
                password: password
            }).select('-__v -password')
            console.log("🚀 ~ userFound", userFound)
    
            if (!userFound.length) {
                res.send({success: false, error: 2})
                return
            }
            res.send({success: true, user: userFound[0]})
        } catch (error) {
        
            console.log("🚀 ~ Error in Login users", error.message)
    
            res.send({success: false, error: error.message})
            
        }
}
