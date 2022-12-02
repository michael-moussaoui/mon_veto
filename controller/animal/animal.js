import { executeQuery } from "../../config/db";
const getAllAnimals = async (req, res) => {
	let animalData = await executeQuery("select * from animal", []);
	res.send("animalData");
};

export { getAllAnimals };
