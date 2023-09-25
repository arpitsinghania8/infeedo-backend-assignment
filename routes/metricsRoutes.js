const express = require("express");
const router = express.Router();
const metricsController = require("../controllers/metricsController");

router.get("/all", metricsController.getTaskMetrics);

module.exports = router;
