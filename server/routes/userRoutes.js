const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const userController = require('../controllers/userController')

router.get('/logout', auth, userController.logout)
router.post('/list', auth, userController.list)
router.patch('/edit', auth, userController.edit)

router.post('/login', userController.login)
router.post('/delete', userController.login)
router.post('/register', userController.register)
router.post('/emailconfirm', userController.emailConfirm)
router.post('/forgotpassword', userController.forgotPassword)
router.post('/changepassword', userController.changePassword)

module.exports =  router;