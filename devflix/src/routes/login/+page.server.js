import { authenticate } from "../../lib/db/controllers/users.controller";
import { createCookie } from "../../lib/db/controllers/sessions.controller";
import { fail } from '@sveltejs/kit';

/**
 * Gère la connexion d'un utilisateur.
 * @param {Object} cookies - Les cookies de la requête.
 * @param {Object} request - La requête.
 * @returns {Object} - Résultat de la connexion.
 */
export const actions = {

    login: async({cookies, request}) => {
        const data = await request.formData();
        try{
            const auth = await authenticate(data.get("courriel"), data.get("password"));
            createCookie(auth.id, cookies);
            console.log("Connexion réussie : ", auth);
            return { success: true, session: cookies.get("session"), auth: auth.id}
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
            return fail(401, error);
        }
    }
}
