const express = require("express");
const router = express.Router();
const { AdminController } = require("../controllers");

const { verifyToken } = require("../middlewares/index");

router.post("", AdminController.registerAdmin);

module.exports = router;
