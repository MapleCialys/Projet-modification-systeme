import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Sessions } from "../models/sessions.model";


/**
 * Création d'un nouvel utilisateur
 *
 * @export
 * @param {String} p_nom
 * @param {String} p_prenom
 * @param {Number} p_role_id
 * @param {String} p_password
 */
export async function newUser(p_nom, p_prenom, p_role_id, p_password){
   try{
     const resultat = await Users.create({
        nom: p_nom,
        prenom: p_prenom,
        role_id: p_role_id,
        password: p_password
    });
    return resultat.dataValues;
    }catch(error){
        throw error;
    }
}

/**
 * Va chercher tous les utilisateurs
 *
 * @export
 * @async
 * @returns {Object}
 */
export async function findAll(){
    return await Users.findAll({
        include: [
            { model: Roles, as: "role" }
        ]
    }).then(resultat => {
        return resultat.map(user => ({
            ...user.dataValues,
            role: user.role ? user.role.dataValues : null
        }));
    })
    .catch((error)=>{
        throw error;
    });
}

/**
 * Find User
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
 */
export async function findOne(p_where){
    return await Users.findOne({ where: p_where, include: [{
        model: Roles,
        as: 'role'
    }]})
    .then(res => {
        return {
            ...res.dataValues,
            role: res.role ? res.role.dataValues : null
        };
    }).catch((error) => {
        throw error;
    });
}

/**
 * Authentification
 *
 * @export
 * @async
 * @param {String} p_nom
 * @param {String} p_prenom
 * @param {String} p_password
 * @returns {Object}
 */
export async function authenticate(p_nom, p_prenom, p_password){
    try{

        //Trouver l'utilisateur :
        const user = await findOne({ nom: p_nom, prenom: p_prenom });

        if(!user) throw "Utilisateur non trouvé";

        const goodPassword = await bcrypt.compare(p_password, user.password);

        if(!goodPassword) throw "Mot de passe invalide";

        return user;

    }catch(error){
        throw error;
    }
}