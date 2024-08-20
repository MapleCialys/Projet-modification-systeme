import { Items } from "../models/items.model";


/**
 * Création d'un nouvel item
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_description
 * @param {Number} p_quantite
 */
export async function newItem(p_nom, p_description, p_quantite){
    Items.create({
        nom: p_nom,
        description: p_description,
        quantite: p_quantite
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tous les items
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Items.findAll().then(resultat => {
        return resultat.map(item => item.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find Item
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Items.findOne({ where: p_where })
    .then(res => {
        return res.dataValues;
    }).catch((error) => {
        throw error;
    });
}