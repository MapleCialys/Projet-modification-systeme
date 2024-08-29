import { findOne } from "$lib/db/controllers/roles.controller.js";

/**
 * Charge un rôle spécifique en fonction de l'identifiant.
 * @param {Object} params - Les paramètres de la requête.
 * @returns {Object} - Le rôle spécifié.
 */
export async function load({ params }){
    const role = await findOne({id:params.id});
    return { role:role }
}
