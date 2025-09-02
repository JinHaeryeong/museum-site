const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

// 예약 목록 조회
router.get("/", reservationController.list);

// 예약
router.post("/", reservationController.create);

// 예약 취소
router.patch("/:id/cancel", reservationController.cancel);

module.exports = router;
