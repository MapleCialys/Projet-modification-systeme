/* Permet d'afficher les infos des films dans le Paniers */
import { findAllInCart } from "$lib/db/controllers/items_paniers.controller.js";
// import { findOne } from "$lib/db/controllers/paniers.controller.js";
import { findAll } from "../../../lib/db/controllers/items.controller.js";
import { findOne as findMovie } from "../../../lib/db/controllers/items.controller.js";
import { deleteCart } from "../../../lib/db/controllers/items_paniers.controller.js";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";

export async function load({ params, cookies }){
    const items = await findAllInCart({users_id: params.id});
    let movie = null;
    for (const element of items) {
        movie = await findMovie({id: element.items_id});
        element.movie = movie;
    }
    return { items:items }
}

/* Paniers */

export const actions = {

    deleteAll: async({ cookies })=>{
        
        const cookie = await findOne({uuid: cookies.get('session')});
    
        try{
            const result = await deleteCart({users_id: cookie.user_id});
            console.log(result);
        }catch(error){
            console.log(error);
        }  
    },

    deleteOne: async({ params, request }) => {

        const data = await request.formData();

        try{
            const result = await deleteCart({ id: data.get('movie_id')});
            console.log(result);   
        }catch(error){
            console.log(error); 
        }
    },

    majCart: async ({ params, cookies }) => {
        const items = await findAllInCart({users_id: params.id});
        let movie = null;
        for (const element of items) {
            movie = await findMovie({id: element.items_id});
            element.movie = movie;
        }
        return { items:items }
    }

}
