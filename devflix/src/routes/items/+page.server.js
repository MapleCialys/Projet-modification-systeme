import { findAll } from "../../lib/db/controllers/items.controller";
import { findOne } from "../../lib/db/controllers/sessions.controller.js";

export async function load({params, cookies}) {
    const items = await findAll();
    const session = cookies.get("session");
    const id_user = await findOne({uuid: session});
    return { items:items, user: id_user.users.dataValues };
}