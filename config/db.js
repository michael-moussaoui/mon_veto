const { createPool } = require("mysql");
const pool = createPool({
	host: "localhost",
	user: "root",
	password: "",
	port: "3306",
	database: "veto",
});

pool.getConnection((err) => {
	if (err) {
		console.log("Error connecting to database...");
	}
	console.log("connect to db...");
});

const executeQuery = (query, arrParms) => {
	return new Promise((resolve, reject) => {
		try {
			pool.query(query, arrParms, (err, data) => {
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

module.exports = { executeQuery };
