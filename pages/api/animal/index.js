import nc from "next-connect";
import {
	getAllAnimals,
	saveAnimal,
} from "../../../controller/animal/animal";

const handler = nc();
handler.get(getAllAnimals);
handler.post(saveAnimal);
export default handler;
