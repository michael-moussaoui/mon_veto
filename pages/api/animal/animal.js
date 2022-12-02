import nc from "next-connect";
import { getAllAnimals } from "../../../controller/animal/animal";

const handler = nc();
handler.get(getAllAnimals);
export default handler;
