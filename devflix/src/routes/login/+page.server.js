import { authenticate } from "../../lib/db/controllers/users.controller";
import { createCookie } from "../../lib/db/controllers/sessions.controller";

export const actions = {

    login: async({cookies, request}) => {
        const data = await request.formData();
        console.log("Data : ", data)
        try{
            const auth = await authenticate(data.get("nom"), data.get("prenom"), data.get("password"));
            createCookie(auth.id, cookies);
            console.log("Connexion réussie : ", auth);
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
        }
    }
}