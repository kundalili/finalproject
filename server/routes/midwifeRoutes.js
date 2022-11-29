const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const midwifeController = require('../controllers/midwifeController')

router.patch('/edit', auth, midwifeController.edit)
router.get('/list', auth, midwifeController.list)

module.exports =  router;
