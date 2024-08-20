import { findOne } from "$lib/db/controllers/roles.controller.js";

export async function load({ params }){
    console.log(params)
    const role = await findOne({id:params.id});
    return { role:role }
}