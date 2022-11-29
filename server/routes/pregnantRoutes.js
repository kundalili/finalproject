const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const pregnantController = require('../controllers/pregnantController')

router.patch('/edit', auth, pregnantController.edit)
router.get('/list', auth, pregnantController.list)

module.exports =  router;
