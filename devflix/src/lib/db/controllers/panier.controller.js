import { Panier } from "../models/panier.model";
import { Users } from "../models/users.model";

/**
 * Création d'un nouveau panier
 *
 * @export
 * @param {Number} p_user_id
 */
export async function newPanier(p_user_id){
    Panier.create({
        user_id: p_user_id
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Va chercher tous les paniers
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Panier.findAll().then(resultat => {
        return resultat.map(panier => panier.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find Panier
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Panier.findOne({ where: p_where, include: [{
        model: Users,
        as: 'user'
    }]})
    .then(res => {
        return {
            ...res.dataValues,
            user: res.user ? res.user.dataValues : null
        };
    }).catch((error) => {
        throw error;
    });
}