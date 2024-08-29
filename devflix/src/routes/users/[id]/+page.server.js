import { findOne } from "$lib/db/controllers/users.controller";

/**
 * Charge les données d'un utilisateur spécifique en fonction de l'identifiant.
 * @param {Object} params - Les paramètres de la requête.
 * @returns {Object} - Les données de l'utilisateur.
 */
export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });

    return { user:user };
}
