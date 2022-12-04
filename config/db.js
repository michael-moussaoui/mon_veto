import mysql from "serverless-mysql";

const pool = mysql({
	config: {
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	},
});

export default async function excuteQuery({ query, values }) {
	try {
		const results = await pool.query(query, values);
		await pool.end();
		return results;
	} catch (error) {
		return { error };
	}
}

export { pool };
