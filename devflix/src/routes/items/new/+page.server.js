
import { newItem } from "$lib/db/controllers/items.controller";

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newItem(data.get("nom"), data.get("description"), data.get("quantite"));

        console.log(res);
    }

}