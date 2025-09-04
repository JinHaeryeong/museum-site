const express = require("express");
const router = express.Router();
const exhibitionController = require("../controllers/exhibitionController");

router.get("/calendar", exhibitionController.loadCalendar);

module.exports = router;
