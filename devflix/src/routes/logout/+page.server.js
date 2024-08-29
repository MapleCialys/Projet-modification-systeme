import { fail } from '@sveltejs/kit';
import { deleteCookie } from '../../lib/db/controllers/sessions.controller';
import { redirect } from '@sveltejs/kit';

/**
 * Gère la déconnexion de l'utilisateur.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - Résultat de la déconnexion.
 */
export async function load({ cookies })
{
    try {
        deleteCookie(cookies);
        return {success: true};
    }catch(error){
        return fail(401, 'Erreur lors de la déconnexion.');
    }
}
