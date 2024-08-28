import { Paniers } from "../models/paniers.model";
import { Users } from "../models/users.model";


/**
 * Création d'un nouveau Paniers
 *
 * @export
 * @param {Number} p_user_id
 */
export async function newPaniers(p_user_id){
    Paniers.create({
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
 * Va chercher tous les Paniers
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Paniers.findAll().then(resultat => {
        return resultat.map(Paniers => Paniers.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find Paniers
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Paniers.findOne({ where: p_where, include: [{
        model: Users,
        as: 'users'
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