const uploadFile = require("../middlewares/upload");
const File = require('../models/File')


module.exports.upload = async (req, res) => {
  try {
    console.log("file", req?.file?.originalname)

    //const fileUploaded = await File.create({name:req?.file?.originalname})
    //console.log("created file object", fileUploaded)
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Upload a file please!" });
    }    
    
    res.status(200).send({
      message: "The following file was uploaded successfully: " + req.file.originalname,
    });
  } catch (err) { // error handling
    //await File.deletebyId(fileUploaded?._id)
    res.status(500).send({
      message: `Unable to upload the file: ${req.file}. ${err}`,
    });
  }
};

module.exports.download = async (req, res) => {
  const fileName = req.params.name;  // define uploads folder path
  const directoryPath = "./uploads";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "There was an issue in downloading the file. " + err,
      });
    }
  });
};


