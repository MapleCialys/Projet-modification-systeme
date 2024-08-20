
import { newUser } from "$lib/db/controllers/users.controller.js";
import { findAll } from "../../../lib/db/controllers/roles.controller";


export async function load({params}){

}


export const actions = {

    new: async({ cookies, request })=>{
        const data = await request.formData();

        let res = await newUser(data.get("nom"), data.get("prenom"), data.get("role"), data.get("password"));

        console.log(res);
    }

}