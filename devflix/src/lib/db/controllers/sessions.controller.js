import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Sessions } from "../models/sessions.model";


/**
 * Crée un cookie de session et une entrée correspondante dans la table Sessions.
 * @param {number} p_user_id - ID de l'utilisateur.
 * @param {Object} p_cookies - Objet des cookies pour la requête.
 * @returns {Object} - Les données de la session créée.
 */
export async function createCookie(p_user_id, p_cookies)
{
    let uuid = crypto.randomUUID();
    p_cookies.set('session', uuid, 
        {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 24
        }
    );
    Sessions.create({
        user_id: p_user_id,
        uuid: uuid
    })
    .then(resultat => {
        return resultat.dataValues;
    })
    .catch((error)=>{
        throw error;
    });
}


/**
 * Supprime le cookie de session et l'entrée correspondante dans la table Sessions.
 * @param {Object} p_cookie - Objet des cookies pour la requête.
 * @returns {Object} - Message de succès.
 */
export async function deleteCookie(p_cookie)
{
    let uuid = p_cookie.get('session');
    p_cookie.delete('session', {path: '/'});
    Sessions.destroy({
        where:{uuid: uuid}
    }).then(resultat => {
        return resultat.dataValues;
    }).catch((error) => {
        throw error;
    });
}

/**
 * Récupère une session spécifique en fonction des conditions fournies.
 * @param {Object} p_where - Conditions de filtrage pour la session.
 * @returns {Object|null} - Les données de la session trouvée ou null.
 */
export async function findOne(p_where){
    return await Sessions.findOne({ where: p_where, include: [{
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
