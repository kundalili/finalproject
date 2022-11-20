const express = require('express')
const router = express.Router();

const messageController = require('../controllers/messageController')

router.post('/send', messageController.send)
router.get('/list', messageController.list)
router.delete('/delete', messageController.delete)
router.get('/group', messageController.group)

module.exports =  router;
