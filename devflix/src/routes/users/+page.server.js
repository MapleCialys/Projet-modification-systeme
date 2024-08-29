import { findAll } from "$lib/db/controllers/users.controller.js";
import { findOne } from "$lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";

export async function load({params, cookies}) {
    const users = await findAll();
    const session = cookies.get("session");
    const id_user = await findOne({uuid: session});
    if(id_user.users.dataValues.role_id != 1)
    {
        console.log('Utilisateur non autorisé' , id_user.users);
        const userId = id_user.users.dataValues.id;
        redirect(308, `/users/${userId}`);
    }
    return { users:users, user: id_user.users.dataValues };
}