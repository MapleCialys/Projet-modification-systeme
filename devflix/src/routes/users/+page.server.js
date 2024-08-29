import { findAll } from "$lib/db/controllers/users.controller.js";
import { findOne } from "$lib/db/controllers/sessions.controller.js";

export async function load({params, cookies}) {
    const users = await findAll();
    const session = cookies.get("session");
    let id_user = null;
    if(session)
    {
        id_user = await findOne({uuid: session});
        return { users:users, user: id_user.users.dataValues };
    }
    else
    return { users:users }
}