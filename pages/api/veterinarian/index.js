import nc from "next-connect";
import {
	getAllVeterinarians,
	saveVeterinarian,
} from "../../../controller/veterinarian/veterinarian";

const handler = nc();
handler.get(getAllVeterinarians);
handler.post(saveVeterinarian);
export default handler;
