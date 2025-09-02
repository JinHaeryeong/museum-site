// userRouter.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.get("/", (req, res) => {
    const str = `
        <div>
            <h1>Users</h1>
        </div>
    `;
    res.send(str);
});
router.post("/", userController.joinUser);
module.exports = router;
