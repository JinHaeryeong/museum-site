// server.js
// package.json에 설정해둬서 npm start하면 nodemon으로 실행됨!
const express = require("express");
require("dotenv").config();
//npm i dotenv morgan
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require("./src/routes/userRouter");
const signRouter = require("./src/routes/signRouter");
const reservationRouter = require("./src/routes/reservationRouter");
const port = process.env.PORT || 7777;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors());

// 라우터 연결
app.use("/api/users", userRouter);
app.use("/api/auth", signRouter);
app.use("/api/reservations", reservationRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}에서 서버가동중`);
});
