const express = require('express')
const router = express.Router();

const userController = require('../controllers/userController')

router.post('/register', userController.register)
router.get('/list', userController.list)
router.put('/edit', userController.edit)




module.exports =  router;