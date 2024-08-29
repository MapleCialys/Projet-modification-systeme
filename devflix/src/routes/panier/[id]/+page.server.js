/* Permet d'afficher les infos des films dans le Paniers */
import { findAllInCart } from "$lib/db/controllers/items_paniers.controller.js";
// import { findOne } from "$lib/db/controllers/paniers.controller.js";
import { findAll } from "../../../lib/db/controllers/items.controller.js";
import { findOne as findMovie } from "../../../lib/db/controllers/items.controller.js";
import { deleteCart } from "../../../lib/db/controllers/items_paniers.controller.js";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";

/**
 * Charge les éléments du panier de l'utilisateur avec les détails du film.
 * @param {Object} params - Les paramètres de la requête.
 * @param {Object} cookies - Les cookies de la requête.
 * @returns {Object} - Les éléments du panier avec les détails du film.
 */
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

    /**
    * Supprime tous les éléments du panier de l'utilisateur.
    * @param {Object} cookies - Les cookies de la requête.
    * @returns {void}
    */
    deleteAll: async({ cookies })=>{
        
        const cookie = await findOne({uuid: cookies.get('session')});
    
        try{
            const result = await deleteCart({users_id: cookie.user_id});
            console.log(result);
        }catch(error){
            console.log(error);
        }  
    },

    /**
    * Supprime un élément spécifique du panier.
    * @param {Object} params - Les paramètres de la requête.
    * @param {Object} request - La requête.
    * @returns {void}
    */
    deleteOne: async({ params, request }) => {

        const data = await request.formData();

        try{
            const result = await deleteCart({ id: data.get('movie_id')});
            console.log(result);   
        }catch(error){
            console.log(error); 
        }
    },

    /**
    * Met à jour les éléments du panier de l'utilisateur avec les détails du film.
    * @param {Object} params - Les paramètres de la requête.
    * @param {Object} cookies - Les cookies de la requête.
    * @returns {Object} - Les éléments du panier avec les détails du film.
    */
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
