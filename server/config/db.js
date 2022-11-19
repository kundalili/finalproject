const mongoose = require('mongoose');

module.exports = async () => {
    try {

        await mongoose.connect(process.env.DB_STRING)
        console.log("connected to db")
        
    } catch (error) {
        console.log("error", error)
        
        process.exit(1)
    }
}