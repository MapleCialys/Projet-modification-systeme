/* Permet d'afficher les infos des films dans le Paniers */
import { findAllInCart } from "$lib/db/controllers/items_paniers.controller.js";
import { findOne } from "$lib/db/controllers/paniers.controller.js";
import { findAll } from "../../../lib/db/controllers/items.controller.js";
import { findOne as findMovie } from "../../../lib/db/controllers/items.controller.js";

export async function load({ params }){
    const items = await findAllInCart({Paniers_id: params.id})
    let movie = null;
    for (const element of items) {
        movie = await findMovie({id: element.items_id});
        element.movie = movie;
    }
    console.log(items);
    return { items:items }
}

/* Paniers */

export const actions = {

    add: async({ cookies, request })=>{
        const data = await request.formData();
        const Paniers = await findOne({id:params.id});
        
        let res = await addPaniers(data.get("id"), Paniers);
    }

}
