const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers");
const { verifyToken } = require("../middlewares/index");

router.post("/register", AuthController.authRegister);
router.post("/login", AuthController.authLogin);

module.exports = router;
