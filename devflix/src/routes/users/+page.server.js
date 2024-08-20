import { findAll } from "$lib/db/controllers/users.controller.js";

export async function load({ params }){

    const users = await findAll(); 

    return { users:users };

}