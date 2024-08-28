import { findOne } from "$lib/db/controllers/users.controller";

export async function load({ params }){
    const idUser = params.id;
    const user = await findOne({ id: idUser });

    return { user:user };
}