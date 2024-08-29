import { findOne } from '../../lib/db/controllers/sessions.controller.js';

/**
 * Charge les données utilisateur en fonction du cookie de session.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - Les données utilisateur.
 */
export async function load({ cookies }){
    const data = await findOne({uuid: cookies.get('session')});
    return {user: data.users.dataValues};
}
