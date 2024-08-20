import { findOne } from "$lib/db/controllers/items.controller.js";

export async function load({ params }){
    console.log(params)
    const item = await findOne({id:params.id});
    return { item:item }
}