const express = require("express");
const router = express.Router();
const { ImageUploadController } = require("../controllers");
const upload = require("../utils/multer");

router.post("/", upload.single("file"), ImageUploadController.uploadImage);

module.exports = router;
