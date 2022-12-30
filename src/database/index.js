const mysql = require('mysql');
const { makeDb } = require('mysql-async-simple');
const dotenv = require("dotenv")

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});
const db = makeDb();

module.exports = { connection, db };
