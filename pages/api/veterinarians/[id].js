import { pool } from "../../../config/db";

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			return await getTask(req, res);
		case "DELETE":
			return await deleteVeterinarian(req, res);
		case "PUT":
			return await updateVeterinarian(req, res);
		default:
			return res.status(400).json({ message: "bad request" });
	}
}

const getTask = async (req, res) => {
	try {
		const result = await pool.query(
			"SELECT * FROM veterinarian WHERE id = ?",
			[req.query.id]
		);
		return res.status(200).json(result[0]);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

const deleteVeterinarian = async (req, res) => {
	try {
		await pool.query("DELETE FROM veterinarian WHERE id = ?", [
			req.query.id,
		]);
		return res.status(204).json();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

const updateVeterinarian = async (req, res) => {
	try {
		console.log(req.body);
		await pool.query("UPDATE veterinarian SET ? WHERE id = ?", [
			req.body,
			req.query.id,
		]);
		return res.status(204).json();
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
