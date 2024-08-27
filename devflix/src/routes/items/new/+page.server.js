import { newItem } from "$lib/db/controllers/items.controller";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";

export async function load({params, cookies}) {
    const session = cookies.get("session");
    const id_user = await findOne({uuid: session});
    if(id_user.users.dataValues.role_id != 1)
    {
        console.log('Utilisateur non autorisé' , id_user.users);
        redirect(308, '/logout');
    }
    return { user: id_user.users.dataValues };
}

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newItem(data.get("nom"), data.get("description"), data.get("image_item"), data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        console.log(res);

        // Redirection vers le catalogue
        throw redirect(303, "/items");
    }

}