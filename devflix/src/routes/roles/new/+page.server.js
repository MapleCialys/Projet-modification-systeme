
import { newRole } from "$lib/db/controllers/roles.controller";

export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newRole(data.get("nom"), data.get("description"));

        //console.log(res);
    }

}