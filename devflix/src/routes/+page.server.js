import { newUser } from "../lib/db/controllers/users.controller";

export const actions = {

    signin: async({cookies, request}) => {
        const data = await request.formData();
        console.log("Data : ", data)
        try{
            const auth = await newUser(data.get("nom"), data.get("prenom"), '2', data.get("password"));

            console.log("Connexion réussie : ", auth);
        }catch(error){
            console.log("Erreur lors de la connexion : ", error);
        }
    }
}