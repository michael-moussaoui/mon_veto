const { createPool } = require("mysql");

const pool = createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

pool.getConnection((err) => {
	if (err) {
		console.error("not connected");
	}
	console.log("connected to server");
});

const excuteQuery = (query, arrParms) => {
	return new Promise((resolve, reject) => {
		try {
			pool.query(query, arrParms, (err, data) => {
				if (err) {
					console.error("error executing the query", err);
					reject(err);
				}
				resolve(data);
			});
		} catch (err) {
			reject(err);
		}
	});
};
export { excuteQuery };
