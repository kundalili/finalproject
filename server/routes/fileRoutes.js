const express = require("express");
const router = express.Router();

const {auth} = require('../middlewares/auth');

const fileController = require('../controllers/fileController')

router.post("/upload", auth, fileController.upload);
router.post("/download", auth, fileController.download);


module.exports =  router;

