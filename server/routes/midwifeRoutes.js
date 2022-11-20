const express = require('express')
const router = express.Router();

const userController = require('../controllers/midwifeController')

router.put('/edit', userController.edit)
router.get('/list', userController.list)

module.exports =  router;
