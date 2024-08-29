import { findOne } from "$lib/db/controllers/items.controller.js";
import { findOne as findSession } from "$lib/db/controllers/sessions.controller.js";
import { redirect } from "@sveltejs/kit";
import { editItem } from "$lib/db/controllers/items.controller.js";
import { writeFile } from "fs/promises";
import { extname } from "path";

export async function load({params, cookies}) {
    const item = await findOne({id:params.id});
    const session = cookies.get("session");
    const id_user = await findSession({uuid: session});
    if(id_user.users.dataValues.role_id != 1)
    {
        console.log('Utilisateur non autorisé' , id_user.users);
        redirect(308, '/logout');
    }
    return { item:item, user: id_user.users.dataValues };
}

export const actions = {

    edit: async({ cookies, request })=>{
        const data = await request.formData();
        const file = data.get('image_item');
        let filename = null;

        // Vérifier si file contient une image, si oui le chemin du fichier sera généré et utilisé
        if (file && file.name) {
            filename = `src/lib/img/items/${crypto.randomUUID()}${extname(file.name)}`;
            await writeFile(filename, Buffer.from(await file.arrayBuffer()));
        }

        let res = await editItem(data.get("id"), data.get("nom"), data.get("description"), filename, data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        // Redirection vers le catalogue
        throw redirect(303, "/items");
    }

}