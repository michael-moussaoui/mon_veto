import { excuteQuery } from "../../config/database";
const getAllOwners = async (req, res) => {
	try {
		let ownerData = await excuteQuery("SELECT * FROM owner", []);
		res.send(ownerData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getOwnerById = async (req, res) => {
	let id = req.query.id;
	try {
		let ownerData = await excuteQuery(
			`SELECT * FROM owner WHERE id=${id}`,
			[]
		);

		res.status(200).json(ownerData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteOwnerById = async (req, res) => {
	let id = req.query.id;
	try {
		let ownerData = await excuteQuery(
			`DELETE FROM owner where id=?`,
			[id]
		);
		res.status(200).json(ownerData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const saveOwner = async (req, res) => {
	console.log(req.body);
	let name = req.body.name;
	let pseudo = req.body.pseudo;
	let password = req.body.password;
	let emailAdress = req.body.emailAdress;

	try {
		let ownerData = await excuteQuery(
			`INSERT INTO owner(name, pseudo, password, emailAdress) values(?,?,?,?)`,
			[name, pseudo, password, emailAdress]
		);
		ownerData = await excuteQuery(
			` SELECT * FROM owner WHERE id=${ownerData.insertId}`
		);
		res.status(200).json(ownerData);
	} catch (err) {
		res.status(400).json(err);
	}
};

const updateOwner = async (req, res) => {
	let id = req.query.id;
	const { name, pseudo, password, emailAdress } = req.body;
	try {
		let ownerData = await excuteQuery(
			`SELECT * FROM owner WHERE id=?`,
			[id]
		);

		if (ownerData.length > 0) {
			ownerData = await excuteQuery(
				`UPDATE  SET name=?, pseudo=?, password=?, emailAdress=?, WHERE id=?`,
				[name, pseudo, password, emailAdress, id]
			);
			res.status(200).json(ownerData);
		} else {
			res
				.status(400)
				.json(`propriétaire non trouvé sur cet id=${id}`);
		}
	} catch (err) {
		res.status(400).json(err);
	}
};

export {
	getAllOwners,
	getOwnerById,
	deleteOwnerById,
	saveOwner,
	updateOwner,
};
