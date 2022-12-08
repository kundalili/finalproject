const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const postController = require('../controllers/postController')


router.post('/send',auth, cloudinaryUpload.single('image'), postController.send)
router.get('/list', auth, postController.list)
router.delete('/delete', auth, postController.delete)
router.post('/like', auth, postController.like)
router.post('/diduserlike', auth, postController.diduserlike)
router.post('/updaterights', auth, postController.updaterights)


module.exports =  router;
