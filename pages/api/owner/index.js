import nc from "next-connect";
import {
	getAllOwners,
	saveOwner,
} from "../../../controller/owner/owner";

const handler = nc();
handler.get(getAllOwners);
handler.post(saveOwner);
export default handler;
