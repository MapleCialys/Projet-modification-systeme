
import { Items } from "../models/items.model";
import { Paniers } from "../models/Paniers.model";
import { Items_Paniers } from "../models/items_Paniers.model";

/**
 * Création d'un nouveau items_Paniers
 *
 * @export
 * @param {Number} p_items_id
 * @param {Number} p_paniers_id
 */
export async function newItemsPaniers(p_items_id, p_paniers_id){
    Items_Paniers.create({
        items_id: p_items_id,
        Paniers_id: p_paniers_id
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tous les items_Paniers
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Items_Paniers.findAll({
        include: [
            { model: Items, as: "items" },
            { model: Paniers, as: "Paniers" }
        ]
    }).then(resultat => {
        return resultat.map(item_Paniers => item_Paniers.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tout les items d'un panier specifique
 * @param {Object} p_where Objet contenant le parametre à filtrer
 * @returns Les données de la table
 */
export async function findAllInCart(p_where){
    return await Items_Paniers.findAll({
        where: p_where
    }).then(resultat => {
        return resultat.map(item_Paniers => item_Paniers.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}


/**
 * Find Item_Paniers
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Items_Paniers.findOne({ where: p_where, include: [{
        model: Items,
        as: 'items',
        model: Paniers,
        as: 'Paniers'
    }]})
    .then(res => {
        if(res)
            return {
                ...res.dataValues,
                role: res.role ? res.role.dataValues : null
            };
            else
                return null;
    }).catch((error) => {
        throw error;
    });
}