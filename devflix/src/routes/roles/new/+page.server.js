
import { newRole } from "$lib/db/controllers/roles.controller";

export const actions = {

/**
 * Crée un nouveau rôle.
 * @param {Object} cookies - Les cookies de la requête.
 * @param {Object} request - La requête.
 * @returns {void}
 */
export 
    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newRole(data.get("nom"), data.get("description"));
    }

}
