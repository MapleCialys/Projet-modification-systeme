import { authenticate } from "../../lib/db/controllers/users.controller";
import { createCookie } from "../../lib/db/controllers/sessions.controller";
import { fail } from '@sveltejs/kit';

export const actions = {

    login: async({cookies, request}) => {
        const data = await request.formData();
        try{
            const auth = await authenticate(data.get("courriel"), data.get("password"));
            createCookie(auth.id, cookies);
            console.log("Connexion réussie : ", auth);
            return { success: true, session: cookies.get("session")}
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
            return fail(401, error);
        }
    }
}