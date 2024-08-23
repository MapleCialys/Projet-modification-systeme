import { Sequelize } from "sequelize";
import { Roles } from "../lib/db/models/roles.model";
import { Users } from "../lib/db/models/users.model";
import { Items } from "../lib/db/models/items.model";
import { Sessions } from "../lib/db/models/sessions.model";
import { sequelize } from "../lib/db/db";

export async function load({ cookies }) {
    await sequelize.sync();
    const sessionCookie = cookies.get('session', {path: '/'});
    if (!sessionCookie)
        return{cookie:false};
    return{cookie: sessionCookie};
}