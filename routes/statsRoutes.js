const express = require("express");
const router = express.Router();
const { StatsController } = require("../controllers");
const Controller = StatsController;
const { verifyToken } = require("../middlewares/index");

router.get("", Controller.index);

module.exports = router;
