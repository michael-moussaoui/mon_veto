const { createPool } = require("mysql");
const pool = createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	port: process.env.MYSQL_HOST,
	database: process.env.MYSQL_DATABASE,
});

pool.getConnection((err) => {
	if (err) {
		console.log("error getting connection");
	}
	console.log("connection etablished");
});

const excuteQuery = (query, arraParms) => {
	return new Promise((resolve, reject) => {
		try {
			pool.query(query, arraParms, (err, data) => {
				if (err) {
					console.log("error in executing the query");
					reject(err);
				}
				resolve(data);
			});
		} catch (err) {
			reject(err);
		}
	});
};

module.exports = excuteQuery;
