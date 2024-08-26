import { findOne } from "$lib/db/controllers/panier.controller.js";

export const actions = {

    add: async({ cookies, request })=>{
        const data = await request.formData();
        const panier = await findOne({id:params.id});
        
        let res = await addPanier(data.get("id"), panier);

        console.log(res);
    }

}

export async function load({ params }){
    console.log(params)
    const panier = await findOne({id:params.id});
    return { panier:panier }
}