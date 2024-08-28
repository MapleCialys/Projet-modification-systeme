import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Sessions } from "../models/sessions.model";

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
 * Find User
 *
 * @export
 * @async
 * @param {Object} p_where
 * @returns {Object}
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