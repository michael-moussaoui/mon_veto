import { excuteQuery } from "../../config/database";
const getAllAnimals = async (req, res) => {
	try {
		let animalData = await excuteQuery("SELECT * FROM animal", []);
		res.send(animalData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getAnimalById = async (req, res) => {
	let id = req.query.id;
	try {
		let animalDta = await excuteQuery(
			`SELECT * FROM Animal WHERE id=${id}`,
			[]
		);

		res.status(200).json(animalDta);
	} catch (err) {
		res.status(500).json(err);
	}
};

const deleteAnimalById = async (req, res) => {
	let id = req.query.id;
	try {
		let animalData = await excuteQuery(
			`DELETE FROM animal where id=?`,
			[id]
		);
		res.status(200).json(animalData);
	} catch (err) {
		res.status(500).json(err);
	}
};

const saveAnimal = async (req, res) => {
	console.log(req.body);
	let name = req.body.name;
	let type = req.body.type;
	let birthday = req.body.birthday;
	let size = req.body.size;
	let weight = req.body.weight;
	try {
		let animalData = await excuteQuery(
			`INSERT INTO animal(name,type,birthday,size,weight) values(?,?,?,?,?)`,
			[name, type, birthday, size, weight]
		);
		animalData = await excuteQuery(
			` SELECT * FROM animal WHERE id=${animalData.insertId}`
		);
		res.status(200).json(animalData);
	} catch (err) {
		res.status(400).json(err);
	}
};

const updateAnimal = async (req, res) => {
	let id = req.query.id;
	const { name, type, birthday, size, weight } = req.body;
	try {
		let animalData = await excuteQuery(
			`SELECT * FROM animal WHERE id=?`,
			[id]
		);

		if (animalData.length > 0) {
			animalData = await excuteQuery(
				`UPDATE  SET name=?, type=?, birthday=?, size=?, weight=? WHERE id=?`,
				[name, type, birthday, size, weight, id]
			);
			res.status(200).json(animalData);
		} else {
			res.status(400).json(`animal non trouvé sur cet id=${id}`);
		}
	} catch (err) {
		res.status(400).json(err);
	}
};

export {
	getAllAnimals,
	getAnimalById,
	deleteAnimalById,
	saveAnimal,
	updateAnimal,
};
