const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const userController = require('../controllers/midwifeController')

router.put('/edit', auth, userController.edit)
router.get('/list', auth, userController.list)

module.exports =  router;
