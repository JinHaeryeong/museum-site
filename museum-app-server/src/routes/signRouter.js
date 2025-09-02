const express = require("express");
const router = express.Router();
const signController = require("../controllers/signController");

router.post("/signin", signController.signin);
router.post("/signout", signController.signout);
module.exports = router;
