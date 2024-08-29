import { findAll } from "../../lib/db/controllers/roles.controller";

/**
 * Charge tous les rôles.
 * @param {Object} params - Les paramètres de la requête.
 * @returns {Object} - La liste des rôles.
 */
export async function load({params}) {
    const roles = await findAll();
    return { roles:roles };
}
