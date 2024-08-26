import { newItem } from "$lib/db/controllers/items.controller";

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newItem(data.get("nom"), data.get("description"), data.get("image_item"), data.get("bande_annonce"), data.get("date"), data.get("quantite_disponible"));

        console.log(res);

        const itemId = res.id;

        // Redirection vers la page du nouveau film une fois formulaire rempli et envoyé
        throw redirect(303, '/items/{itemId}');
    }

}