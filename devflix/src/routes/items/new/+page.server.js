import { newItem } from "$lib/db/controllers/items.controller";
import { redirect } from '@sveltejs/kit';

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newItem(data.get("nom"), data.get("description"), data.get("image_item"), data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        console.log(res);

        // Redirection vers le catalogue
        throw redirect(303, "/items");
    }

}