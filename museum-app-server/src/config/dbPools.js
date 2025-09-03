// DB
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, // <- 바뀜
    password: process.env.DB_PASSWORD, // <- 바뀜
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnections: true,
});

module.exports = pool;
