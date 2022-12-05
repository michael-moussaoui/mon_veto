import nc from "next-connect";
import {
	getAnimalById,
	deleteAnimalById,
	updateAnimal,
} from "../../../controller/animal/animal";

const handler = nc();
handler.get(getAnimalById);
handler.delete(deleteAnimalById);
handler.put(updateAnimal);
export default handler;
