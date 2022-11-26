const express = require('express')
const router = express.Router();

const messageController = require('../controllers/messageController')

router.post('/send', messageController.send)
router.post('/list', messageController.list)
router.delete('/delete', messageController.delete)
router.post('/group', messageController.group)
router.put('/edit',messageController.edit)

module.exports =  router;
