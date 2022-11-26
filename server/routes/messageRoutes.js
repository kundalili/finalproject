const express = require('express')
const router = express.Router();
const {auth} = require('../middlewares/auth');

const messageController = require('../controllers/messageController')

router.post('/send', auth, messageController.send)
router.post('/list', auth, messageController.list)
router.delete('/delete', auth,  messageController.delete)
router.post('/group', auth, messageController.group)
router.put('/edit', auth, messageController.edit)

module.exports =  router;
