const express = require("express");
const router = express.Router();
const { ProductsController } = require("../controllers");
const Controller = ProductsController;
const { verifyToken } = require("../middlewares/index");

router.post("", Controller.create);

module.exports = router;