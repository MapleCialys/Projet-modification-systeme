import { newItem } from "$lib/db/controllers/items.controller";
import { findOne } from "../../../lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";
import { writeFile } from "fs/promises";
import { extname } from "path";

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
        const file = data.get('image_item');
        const filename = `src/lib/img/items/${crypto.randomUUID()}${extname(file.name)}`;
        await writeFile(filename, Buffer.from(await file.arrayBuffer()));


        let res = await newItem(data.get("nom"), data.get("description"), filename, data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        // Redirection vers le catalogue
        throw redirect(303, "/items");
        return;
    }

}