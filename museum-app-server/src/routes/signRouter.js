const express = require("express");
const router = express.Router();
const signController = require("../controllers/signController");
const verifyMiddleware = require("../middlewares/verifyMiddleware");

router.post("/signin", signController.signin);
router.post("/signout", signController.signout);
router.get("/user", verifyMiddleware.verifyAccessToken, signController.getAuthenticUser); // accessToken이 유효한지 검증하는 미들웨어 작성
router.post("/refresh", signController.refreshVerify);

module.exports = router;
