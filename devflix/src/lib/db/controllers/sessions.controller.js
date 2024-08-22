import bcrypt from 'bcrypt';
import { Users } from "../models/users.model";
import { Roles } from "../models/roles.model";
import { Sessions } from "../models/sessions.model";

export async function createCookie(p_user_id, cookies)
{
    let uuid = crypto.randomUUID();
    cookies.set('session', uuid, 
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