const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const userController = require('../controllers/pregnantController')

router.put('/edit', auth, userController.edit)
router.get('/list', auth, userController.list)

module.exports =  router;
