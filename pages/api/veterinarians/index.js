import { pool } from "../../../config/db";

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			return await getVeterinarians(req, res);
		case "POST":
			return await saveVeterinarian(req, res);
		default:
			return res.status(400).send("Method not allowed");
	}
}

const getVeterinarians = async (req, res) => {
	try {
		const results = await pool.query("SELECT * FROM veterinarian");
		return res.status(200).json(results);
	} catch (error) {
		return res.status(500).json({ error });
	}
};

const saveVeterinarian = async (req, res) => {
	try {
		const { name, pseudo, password } = req.body;

		const result = await pool.query(
			"INSERT INTO veterinarian SET ?",
			{
				name,
				pseudo,
				password,
			}
		);

		return res.status(200).json({ ...req.body, id: result.insertId });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
