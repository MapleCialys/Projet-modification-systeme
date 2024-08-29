/* Permet d'afficher les infos des films dans le Paniers */
import { findAllInCart } from "$lib/db/controllers/items_paniers.controller.js";
// import { findOne } from "$lib/db/controllers/paniers.controller.js";
import { findAll } from "../../../lib/db/controllers/items.controller.js";
import { findOne as findMovie } from "../../../lib/db/controllers/items.controller.js";
import { deleteCart } from "../../../lib/db/controllers/items_paniers.controller.js";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";

export async function load({ params }){
    const items = await findAllInCart({users_id: params.id})
    let movie = null;
    for (const element of items) {
        movie = await findMovie({id: element.items_id});
        element.movie = movie;
    }
    return { items:items }
}

/* Paniers */

export const actions = {

    deleteAll: async({ request, cookies })=>{

        console.log("cookie => ",cookies.get('session'));
        
        const data = await request.formData();
        const cookie = await findOne({uuid: cookies.get('session')});
        
        
        try{
            const result = await deleteCart({users_id: cookie.user_id});
            console.log(result);
        }catch(error){
            console.log(error);
        }
        
    }

}
