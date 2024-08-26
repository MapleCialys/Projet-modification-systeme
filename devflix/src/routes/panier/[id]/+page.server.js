import { findOne } from "$lib/db/controllers/panier.controller.js";

export async function load({ params }){
    console.log(params)
    const panier = await findOne({id:params.id});
    return { panier:panier }
}