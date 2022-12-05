import nc from "next-connect";
import {
	getVeterinarianById,
	deleteVeterinarianById,
	updateVeterinarian,
} from "../../../controller/veterinarian/veterinarian";

const handler = nc();
handler.get(getVeterinarianById);
handler.delete(deleteVeterinarianById);
handler.put(updateVeterinarian);
export default handler;
