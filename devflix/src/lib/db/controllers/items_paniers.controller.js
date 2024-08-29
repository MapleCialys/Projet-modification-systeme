import { Items } from "../models/items.model";
import { Items_Paniers } from "../models/items_paniers.model";
import { Users } from "../models/users.model";


/**
 * Crée une nouvelle entrée dans la table Items_Paniers.
 * @param {number} p_items_id - ID de l'item.
 * @param {number} p_users_id - ID de l'utilisateur.
 * @returns {Object} - Les données de la nouvelle entrée.
 */
export async function newItemsPaniers(p_items_id, p_users_id){
    Items_Paniers.create({
        items_id: p_items_id,
        users_id: p_users_id
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Récupère toutes les entrées dans la table Items_Paniers.
 * @returns {Object[]} - Liste des entrées avec les données des items et paniers associés.
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
 * Récupère tous les items dans un panier spécifique.
 * @param {Object} p_where - Conditions de filtrage pour le panier.
 * @returns {Object[]} - Liste des données des items dans le panier.
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
 * Récupère une entrée spécifique dans la table Items_Paniers.
 * @param {Object} p_where - Conditions de filtrage pour l'entrée.
 * @returns {Object|null} - Les données de l'entrée trouvée ou null.
 */
export async function findOne(p_where){
    return await Items_Paniers.findOne({ where: p_where, include: [{
        model: Items,
        as: 'items',
        model: Users,
        as: 'users'
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

/**
 * Supprime les entrées dans la table Items_Paniers en fonction des conditions spécifiées.
 * @param {Object} p_where - Conditions de suppression.
 * @returns {Object} - Message de succès.
 */
export async function deleteCart(p_where){
    return await Items_Paniers.destroy({ where: p_where })
    .then(res => {
        return {message: "Panier vidé avec succes."};
    }).catch((error) => {
        throw error;
    });
}
