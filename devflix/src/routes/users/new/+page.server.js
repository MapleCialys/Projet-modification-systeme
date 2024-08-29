
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";
import { createCookie } from "../../../lib/db/controllers/sessions.controller";
import { fail } from '@sveltejs/kit';
import { findOne } from "../../../lib/db/controllers/sessions.controller";

/**
 * Charge les données utilisateur en fonction du cookie de session.
 * @param {Object} params - Les paramètres de la requête.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - Les données utilisateur sous forme de chaîne JSON.
 */
export async function load({params, cookies}) {
    const session = cookies.get("session");
    let id_user = null ;
    if (session)
        id_user = await findOne({uuid: session});
    return { user: JSON.stringify(id_user) };
}



export const actions = {

    /**
     * Crée un nouvel utilisateur et configure le cookie de session.
     * @param {Object} cookies - Les cookies de la requête.
     * @param {Object} request - La requête.
     * @returns {void}
     */
    new: async({ cookies, request })=>{
        const data = await request.formData();

        try {
            let res = await newUser(data.get("nom"), data.get("prenom"), data.get("courriel"), "2", data.get("password"));
            createCookie(res.id, cookies);
        }catch(error){
            return fail(401, error);
        }
    }
}
