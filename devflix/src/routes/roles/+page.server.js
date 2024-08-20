import { findAll } from "../../lib/db/controllers/roles.controller";

export async function load({params}) {
    const roles = await findAll();
    return { roles:roles };
}