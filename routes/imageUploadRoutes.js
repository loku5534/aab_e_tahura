const express = require("express");
const router = express.Router();
const { ImageUploadController } = require("../controllers");
const upload = require("../utils/multer");

//router.post("/", upload.single("file"), ImageUploadController.uploadImage);
router.post("/", upload.single("file"), ImageUploadController.uploadImageToS3);

module.exports = router;
