import { findAll } from "$lib/db/controllers/users.controller.js";
import { findOne } from "$lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";

/**
 * Charge tous les utilisateurs et vérifie le rôle de l'utilisateur connecté.
 * @param {Object} params - Les paramètres de la requête.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - La liste des utilisateurs et les détails de l'utilisateur connecté.
 */
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
