import { Roles } from "../models/roles.model";


/**
 * Crée un nouveau rôle.
 * @param {string} p_nom - Nom du rôle.
 * @param {string} p_description - Description du rôle.
 * @returns {Object} - Les données du rôle créé.
 */
export async function newRole(p_nom, p_description){
    Roles.create({
        nom: p_nom,
        description: p_description,
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Récupère tous les rôles.
 * @returns {Object[]} - Liste des rôles.
 */
export async function findAll(){
    return await Roles.findAll().then(resultat => {
        return resultat.map(role => role.dataValues);
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Récupère un rôle spécifique en fonction des conditions fournies.
 * @param {Object} p_where - Conditions de filtrage pour le rôle.
 * @returns {Object|null} - Les données du rôle trouvé ou null.
 */
export async function findOne(p_where){
    return await Roles.findOne({ where: p_where })
    .then(res => {
        return res.dataValues;
    }).catch((error) => {
        throw error;
    });
}
