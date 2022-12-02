const User = require('../models/User')
const Midwife = require('../models/Midwife')
const Pregnant = require('../models/Pregnant')

const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10;
const jwt = require('jsonwebtoken');
const { sendMail } = require('../utilities/mail');
const { listenerCount } = require('../models/User');

module.exports.register = async (req, res) => {

    const {email, username, password} = req.body;


    try {
        console.log("🚀 ~ register here: ", req.body)

        const {email, username, password} = req.body;

        if (!email || !username || !password || !(email.includes("@")) ) {
            console.log("data", req.body)
            res.send({success: false, error: 'Validation failed, All fields must be filled '})

            return
        }
        
        const salt = await bcrypt.genSalt(10)
        console.log("🚀 ~ salt", salt)

        req.body.password = await bcrypt.hash(password, salt)
        console.log("🚀 ~ hashedPass", req.body.password)

        const userCreated = await User.create( req.body)
        console.log("🚀 ~ userCreated", userCreated)

        const token = jwt.sign({_id: userCreated._id}, process.env.JWT_SECRET, {expiresIn: '48h'})

        sendMail(token,'register')

        res.send({success: true})

    } catch (error) {
        let myerr = !error.message.startsWith ("E11000")? error.message : "username or email is already used"
        console.log("Error: 1", myerr)
        res.send({success: false, error: myerr})

    }
  
}

module.exports.list = async (req, res) => {

    try {
        
        const {_id, username, email, type, name, service, 
            city, language, availability, since, about, duedate} = req.body
        
        let query = {}
        
        if (_id) query._id=_id
        if (username) query.username={ $regex: username }
        if (type) query.type=type
        
        console.log("query",query, req)
        const users = await User.find(query).select('-password -email')   
 
       
        res.send({success: true, users})
    } catch (error) {
    
        console.log("🚀 ~ Error in list users", error.message)

        res.send({success: false, error: error.message})
        
    }
}

 module.exports.edit = async (req, res) => {
     try {
        
         console.log("🚀 ~ edit here: ", req.body)

         const {_id, username, email, password} = req.body

         if ((email==="") || (username==="") || (password==="" )) {
             res.send({success: false, error: 'validation failed'})

             return
         }

         
         const user = await User.findByIdAndUpdate(req.body._id, req.body, {new: true})
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
    
            let {email, username, password} = req.body // emailOrUser, password

            if ((!email && !username ) || !password) { // !emailOrUser || !password
                res.send({success: false, error: 1})
                return
            }

            let query = (username.includes("@")) ? {email: email} : {username: username}

            let userFound = await User.findOne(query).select('-__v')
            
            if (!userFound) return res.send({success: false, error: 2})
             
            if (!userFound.verified) return res.send({success: false, error: 3})
            
            const isMatch = await bcrypt.compare(password, userFound.password)
            
            console.log("🚀 ~ isMatch", isMatch)
    
            if (!isMatch) return res.send({success: false, error: 4})

            // payload, secretkey, options
            const token = jwt.sign({_id: userFound._id}, process.env.JWT_SECRET, {expiresIn: '3h'})
            console.log("🚀 ~ token", token)
    
            res.cookie('myina', token)
    
            // remove password from userfound

            
            console.log("profile and user", userFound )

            res.send({success: true, user: userFound})
        } catch (error) {
        
            console.log("🚀 ~ Error in Login users", error.message)
    
            res.send({success: false, error: error.message})
            
        }
}


module.exports.logout = async (req, res) => {

    try {
        
        res.clearCookie('myina')
       
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in logout users", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.emailConfirm = async (req, res) => {

    try {
        
       
        console.log("🚀 ~ hello from MYINA emailconfirm", req.body)

        const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET)

        const updatedUser = await User.findByIdAndUpdate({_id: decoded._id}, {verified: true}, {new: true})
        
        console.log("🚀 ~ updatedUser", updatedUser)
       
        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in emailconfirm", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.forgotPassword = async (req, res) => {

    try {
        
       
        console.log("🚀 ~ hello from  MYINA forgotPassword", req.body)

        const emailOrUser = req.body.emailOrUsername

        const user = await User.findOne({$or: [{email: emailOrUser}, {username: emailOrUser}]})
        console.log("🚀 ~ user", user)

        if (!user) return res.send({success: false, errorId: 10})

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '4h'})
        console.log("🚀 ~ token", token)
       
        sendMail(token, 'forgotpassword')

        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in forgotPassword", error.message)

        res.send({success: false, error: error.message})
        
    }
}
module.exports.changePassword = async (req, res) => {

    try {
        console.log("🚀 ~ hello from MYINA changePassword", req.body)

        const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET)
        console.log("🚀 ~ decoded", decoded)

        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        console.log("🚀 ~ salt", salt)

        const password = await bcrypt.hash(req.body.password, salt)
        console.log("🚀 ~ hashedPass", req.body.password)

        const updatedUser = await User.findByIdAndUpdate(
            {_id: decoded._id},
            {password},
            {new: true}
            )
        console.log("🚀 ~ updatedUser", updatedUser)

        res.send({success: true})
    } catch (error) {
    
        console.log("🚀 ~ Error in changePassword", error.message)

        res.send({success: false, error: error.message})
        
    }
}


module.exports.delete = async (req, res) => {

    try {
        
        console.log('delete: ', req.query)

        const user = await User.findByIdAndDelete(req.query._id)
        console.log("🚀 ~ user", user)

        if (!user) {
            res.send({success: false, error: 'User not found'})
            return
        }
        
        res.send({success: true})

    } catch (error) {
        console.log('Error in delete user', error.message)

        res.send({success: false, error: error.message})
    }
}
