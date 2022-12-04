// import { executeQuery } from "../../config/db";
import executeQuery from "../../config/database";
const getAllAnimals = async (req, res) => {
	let animalData = await executeQuery("select * from animal", []);
	res.send(animalData);
};

export default getAllAnimals;
