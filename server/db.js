const mysql = require("mysql");

const db = mysql.createPool({
	host: process.env.MYSQL_HOST2,
	user: process.env.MYSQL_USER2,
	password: process.env.MYSQL_PASSWORD2,
	database: process.env.MYSQL_DATABASE,
});

module.exports = db;
