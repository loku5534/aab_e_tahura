const express = require("express");
const router = express.Router();
const { InvoiceController } = require("../controllers");
const Controller = InvoiceController ;
const { verifyToken } = require("../middlewares/index");

router.get("/", Controller.index);
router.post("/", Controller.create);

module.exports = router;