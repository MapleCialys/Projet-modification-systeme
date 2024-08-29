import { newItem } from "$lib/db/controllers/items.controller";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import { extname } from "path";

/**
 * Charge les données pour la page, vérifie le rôle de l'utilisateur.
 * @param {Object} params - Les paramètres de la requête.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - Les données utilisateur.
 */
export async function load({params, cookies}) {
    const session = cookies.get("session");
    const id_user = await findOne({uuid: session});
    if(id_user.users.dataValues.role_id != 1)
    {
        console.log('Utilisateur non autorisé' , id_user.users);
        redirect(308, '/logout');
    }
    return { user: id_user.users.dataValues };
}

/**
 * Gère la création d'un nouvel élément.
 * @param {Object} cookies - Les cookies de la requête.
 * @param {Object} request - La requête.
 * @returns {void}
 */
export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();
        const file = data.get('image_item');
        const filename = `src/lib/img/items/${crypto.randomUUID()}${extname(file.name)}`;
        await writeFile(filename, Buffer.from(await file.arrayBuffer()));


        let res = await newItem(data.get("nom"), data.get("description"), filename, data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        // Redirection vers le catalogue
        throw redirect(303, "/items");
        return;
    }

}
