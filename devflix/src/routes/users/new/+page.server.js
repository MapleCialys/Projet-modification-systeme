
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";
import { createCookie } from "../../../lib/db/controllers/sessions.controller";
import { fail } from '@sveltejs/kit';
import { findOne } from "../../../lib/db/controllers/sessions.controller";
import { newPaniers } from "../../../lib/db/controllers/Paniers.controller.js";


export async function load({params, cookies}) {
    const session = cookies.get("session");
    let id_user = null ;
    if (session)
        id_user = await findOne({uuid: session});
    console.log(id_user);
    return { user: JSON.stringify(id_user) };
}



export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        try {
            let res = await newUser(data.get("nom"), data.get("prenom"), data.get("courriel"), "2", data.get("password"));
            createCookie(res.id, cookies);
            newPaniers(res.id);
        }catch(error){
            return fail(401, error);
        }

        //console.log(res);
    }
}