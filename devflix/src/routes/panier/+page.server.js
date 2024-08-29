import { findOne } from '../../lib/db/controllers/sessions.controller.js';


export async function load({ cookies }){
    const data = await findOne({uuid: cookies.get('session')});
    return {user: data.users.dataValues};
}