import { findAll } from "$lib/db/controllers/items.controller";
import { findOne } from "$lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { newItemsPaniers } from "$lib/db/controllers/items_paniers.controller.js";
import { Paniers } from "$lib/db/models/Paniers.model.js";
import { findOne as findInCart } from "$lib/db/controllers/items_paniers.controller.js";

export async function load({params, cookies}) {
    const items = await findAll();
    const session = cookies.get("session");
    let id_user = null;
    if(session)
    {
        id_user = await findOne({uuid: session});
        return { items:items, user: id_user.users.dataValues };
    }
    else
    return { items:items }
}

export const actions = {

    addToCart: async({cookies, request}) => {
        const data = await request.formData();
        const session = cookies.get("session");
        const user_data = await findOne({uuid: session});
        const id_user = user_data.users.dataValues.id;
        const panier_data = await Paniers.findOne({where:{user_id: id_user}});
        const panier_id = panier_data.dataValues.id;
        const check = await findInCart({items_id: data.get("item")});
        try{
            if(check)
                throw "Cet element est déjà dans votre panier."
            const res = await newItemsPaniers(data.get("item"), panier_id);
            return { success: true, res }
        }catch(error){
            console.log("Erreur lors de l'ajout au panier' : ", error);
            return fail(401, error);
        }
    }
}
