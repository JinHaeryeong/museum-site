// server.js
// package.json에 설정해둬서 npm start하면 nodemon으로 실행됨!
const express = require("express");
require("dotenv").config();
//npm i dotenv morgan
const path = require("path");
const cors = require("cors");
// const morgan = require("morgan");

const port = process.env.PORT || 7777;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(morgan("dev"));
app.use(cors());

app.listen(port, () => {
    console.log(`http://localhost:${port}에서 서버가동중`);
});
