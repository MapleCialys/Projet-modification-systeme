import { Items } from "../models/items.model";


/**
 * Création d'un nouvel item
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_description
 * @param {String} p_image_item
 * @param {String} p_bande_annonce
 * @param {Date} p_date
 * @param {Number} p_quantite_disponible
 */
export async function newItem(p_nom, p_description, p_image_item, p_bande_annonce, p_date, p_quantite_disponible){
    Items.create({
        nom: p_nom,
        description: p_description,
        image_item: p_image_item,
        bande_annonce: p_bande_annonce,
        date: p_date,
        quantite_disponible: p_quantite_disponible
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