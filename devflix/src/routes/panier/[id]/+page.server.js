/* Permet d'afficher les infos des films dans le Paniers */
import { findAll } from "$lib/db/controllers/items.controller";

export async function load({ params }){
    const Paniers = await findOne({id:params.id});
    return { Paniers:Paniers }
}

/* Paniers */
import { findOne } from "$lib/db/controllers/paniers.controller.js";

export const actions = {

    add: async({ cookies, request })=>{
        const data = await request.formData();
        const Paniers = await findOne({id:params.id});
        
        let res = await addPaniers(data.get("id"), Paniers);
    }

}
