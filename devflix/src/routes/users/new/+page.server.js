
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";
import { createCookie } from "../../../lib/db/controllers/sessions.controller";
import { fail } from '@sveltejs/kit';
import { findOne } from "../../../lib/db/controllers/sessions.controller";


export async function load({params, cookies}) {
    const session = cookies.get("session");
    let id_user = null ;
    if (session)
        id_user = await findOne({uuid: session});
    return { user: JSON.stringify(id_user) };
}



export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        try {
            let res = await newUser(data.get("nom"), data.get("prenom"), data.get("courriel"), "2", data.get("password"));
            createCookie(res.id, cookies);
        }catch(error){
            return fail(401, error);
        }
    }
}