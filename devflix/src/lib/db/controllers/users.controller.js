import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Sessions } from "../models/sessions.model";


/**
 * Crée un nouvel utilisateur.
 * @param {string} p_nom - Nom de l'utilisateur.
 * @param {string} p_prenom - Prénom de l'utilisateur.
 * @param {string} p_courriel - Adresse email de l'utilisateur.
 * @param {number} p_role_id - ID du rôle de l'utilisateur.
 * @param {string} p_password - Mot de passe de l'utilisateur.
 * @returns {Object} - Les données de l'utilisateur créé.
 */
export async function newUser(p_nom, p_prenom, p_courriel, p_role_id, p_password){
   try{
    const mail = await Users.findOne({where: {courriel: p_courriel}});
    if(mail)
        throw "Un Compte avec ce courriel existe déjà."
     const resultat = await Users.create({
        nom: p_nom,
        prenom: p_prenom,
        courriel: p_courriel,
        role_id: p_role_id,
        password: p_password
    });
    return resultat.dataValues;
    }catch(error){
        throw error;
    }
}

/**
 * Récupère tous les utilisateurs avec leurs rôles.
 * @returns {Object[]} - Liste des utilisateurs avec les données des rôles associés.
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
 * Récupère un utilisateur spécifique en fonction des conditions fournies.
 * @param {Object} p_where - Conditions de filtrage pour l'utilisateur.
 * @returns {Object|null} - Les données de l'utilisateur trouvé ou null.
 */
export async function findOne(p_where){
    return await Users.findOne({ where: p_where, include: [{
        model: Roles,
        as: 'role'
    }]})
    .then(res => {
        if(res)
        return {
            ...res.dataValues,
            role: res.role ? res.role.dataValues : null
        };
        else
            return null;
    }).catch((error) => {;
        throw error;
    });
}

/**
 * Authentifie un utilisateur en vérifiant l'email et le mot de passe.
 * @param {string} p_courriel - Adresse email de l'utilisateur.
 * @param {string} p_password - Mot de passe de l'utilisateur.
 * @returns {Object} - Les données de l'utilisateur authentifié.
 */
export async function authenticate(p_courriel, p_password){
    try{

        //Trouver l'utilisateur :
        const user = await findOne({ courriel: p_courriel});

        if(!user) throw "Utilisateur non trouvé";

        const goodPassword = await bcrypt.compare(p_password, user.password);

        if(!goodPassword) throw "Mot de passe invalide";

        return user;

    }catch(error){
        throw error;
    }
}
