import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
	try {
		const results = await sql_query(`
        SELECT * FROM veto.owner`);
		return res.status(200).json(results);
	} catch (e) {
		return res.status(500).send({ message: e.message });
	}
};

export default handler;
