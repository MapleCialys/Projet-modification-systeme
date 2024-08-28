import { findOne } from "$lib/db/controllers/roles.controller.js";

export async function load({ params }){
    const role = await findOne({id:params.id});
    return { role:role }
}