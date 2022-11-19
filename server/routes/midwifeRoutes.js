const express = require('express')
const router = express.Router();

const userController = require('../controllers/midwifeController')

router.put('/edit', userController.edit)

module.exports =  router;
