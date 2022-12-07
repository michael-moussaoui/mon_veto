import { excuteQuery } from "../../config/database";
const getAllVeterinarians = async (req, res) => {
	try {
		let veterinarianData = await excuteQuery(
			"SELECT * FROM veterinarian",
			[]
		);
		res.send(veterinarianData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getVeterinarianById = async (req, res) => {
	let id = req.query.id;
	try {
		let veterinarianData = await excuteQuery(
			`SELECT * FROM veterinarian WHERE id=${id}`,
			[]
		);

		res.status(200).json(veterinarianData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteVeterinarianById = async (req, res) => {
	let id = req.query.id;
	try {
		let veterinarianData = await excuteQuery(
			`DELETE FROM veterinarian where id=?`,
			[id]
		);
		res.status(200).json(veterinarianData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const saveVeterinarian = async (req, res) => {
	console.log(req.body);
	let name = req.body.name;
	let pseudo = req.body.pseudo;
	let password = req.body.password;

	try {
		let veterinarianData = await excuteQuery(
			`INSERT INTO veterinarian(name,pseudo,password) values(?,?,?)`,
			[name, pseudo, password, emailAdress]
		);
		veterinarianData = await excuteQuery(
			` SELECT * FROM veterinarian WHERE id=${veterinarianData.insertId}`
		);
		res.status(200).json(veterinarianData);
	} catch (err) {
		res.status(400).json(err);
	}
};

const updateVeterinarian = async (req, res) => {
	let id = req.query.id;
	const { name, pseudo, password } = req.body;
	try {
		let veterinarianData = await excuteQuery(
			`SELECT * FROM veterinarian WHERE id=?`,
			[id]
		);

		if (veterinarianData.length > 0) {
			veterinarianData = await excuteQuery(
				`UPDATE  SET name=?, pseudo=?, password=?, WHERE id=?`,
				[name, pseudo, password, id]
			);
			res.status(200).json(veterinarianData);
		} else {
			res.status(400).json(`vétérinaire non trouvé sur cet id=${id}`);
		}
	} catch (err) {
		res.status(400).json(err);
	}
};

export {
	getAllVeterinarians,
	getVeterinarianById,
	deleteVeterinarianById,
	saveVeterinarian,
	updateVeterinarian,
};
