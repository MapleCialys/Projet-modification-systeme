import { findOne } from "$lib/db/controllers/items.controller.js";
import { findOne as findSession } from "$lib/db/controllers/sessions.controller.js";
import { fail } from "@sveltejs/kit";
import { newItemsPaniers } from "$lib/db/controllers/items_paniers.controller.js";
import { findOne as findInCart } from "$lib/db/controllers/items_paniers.controller.js";


export async function load({ params, cookies }){
    const session = cookies.get("session");
    const user_data = await findSession({uuid: session});
    const role_user = user_data.users.dataValues.role_id;    
    const item = await findOne({id:params.id});
    item.admin = role_user == 1 ? true : false;
    return { item:item }
}

export const actions = {

    /**
     * Ajoute un article au panier de l'utilisateur connecté.
     *
     * @param {Cookies} context.cookies
     * @param {Request} context.request.
     * @returns {<Object>}.
     */
    addToCart: async({cookies, request}) => {
        const data = await request.formData();
        const session = cookies.get("session");
        const user_data = await findSession({uuid: session});
        const id_user = user_data.users.dataValues.id;
        const check = await findInCart({items_id: data.get("item")});
        try{
            if(check)
                throw "Cet element est déjà dans votre panier."
            const res = await newItemsPaniers(data.get("item"), id_user); // changement ici
            return { success: true, res }
        }catch(error){
            console.log("Erreur lors de l'ajout au panier' : ", error);
            return fail(401, error);
        }
    }
}
