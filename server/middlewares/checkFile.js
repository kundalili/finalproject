const {cloudinaryUpload} = require('../config/multer-cloudinary')

module.exports.checkFile = async (req, res, next) => {
console.log('req is',req.file)
try {
    // if (req.file.filename)
    // cloudinaryUpload.single('image')

next()
} catch (error) {
    console.log("🚀 ~ Error in checkFile", error.message)

    res.send({success: false, error: error.message})
}

}
