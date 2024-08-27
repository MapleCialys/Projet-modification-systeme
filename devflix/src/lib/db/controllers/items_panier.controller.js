import { Items_Panier } from "../models/items_panier.model";
import { Items } from "../models/items.model";
import { Panier } from "../models/panier.model";

/**
 * Création d'un nouveau items_panier
 *
 * @export
 * @param {Number} p_items_id
 * @param {Number} p_panier_id
 */
export async function newPanier(p_items_id, panier_id){
    Items_Panier.create({
        items_id: p_items_id,
        panier_id: p_panier_id
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tous les items_panier
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Items_Panier.findAll({
        include: [
            { model: Items, as: "items" },
            { model: Panier, as: "panier" }
        ]
    }).then(resultat => {
        return resultat.map(item_panier => item_panier.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find Item_Panier
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Items_Panier.findOne({ where: p_where, include: [{
        model: Items,
        as: 'items',
        model: Panier,
        as: 'panier'
    }]})
    .then(res => {
        return {
            ...res.dataValues,
            items: res.items ? res.items.dataValues : null,
            ...res.dataValues,
            panier: res.panier ? res.panier.dataValues : null
        };
    }).catch((error) => {
        throw error;
    });
}