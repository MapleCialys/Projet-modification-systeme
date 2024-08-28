import { findAll } from "../../lib/db/controllers/items.controller";
import { findOne } from "../../lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";

export async function load({params, cookies}) {
    const items = await findAll();
    const session = cookies.get("session");
    let id_user = null;
    console.log("ici ma gueule");
    if(session)
    {
        id_user = await findOne({uuid: session});
        return { items:items, user: id_user.users.dataValues };
    }
    else
    return { items:items }

    
}
