import nc from "next-connect";
import {
	getOwnerById,
	deleteOwnerById,
	updateOwner,
} from "../../../controller/owner/owner";

const handler = nc();
handler.get(getOwnerById);
handler.delete(deleteOwnerById);
handler.put(updateOwner);
export default handler;
