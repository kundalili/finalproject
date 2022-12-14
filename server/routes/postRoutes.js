const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');
const {cloudinaryUpload} = require('../config/multer-cloudinary')
const postController = require('../controllers/postController')


router.post('/add',auth, cloudinaryUpload.single('image'), postController.add)
router.post('/list', auth, postController.list)
router.get('/populars', auth, postController.populars)
router.delete('/delete', auth, postController.delete)
router.post('/like', auth, postController.like)
router.post('/diduserlike', auth, postController.diduserlike)
router.post('/updaterights', auth, postController.updaterights)


module.exports =  router;
