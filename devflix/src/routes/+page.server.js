import { Sequelize } from "sequelize";
import { Roles } from "../lib/db/models/roles.model";
import { Users } from "../lib/db/models/users.model";
import { Items } from "../lib/db/models/items.model";
import { Sessions } from "../lib/db/models/sessions.model";
import { Paniers } from "../lib/db/models/Paniers.model.js";
import { Items_Paniers } from "../lib/db/models/items_paniers.model.js";
import { sequelize } from "../lib/db/db";
import { newUser } from "../lib/db/controllers/users.controller.js";

export async function load({ cookies }) {
    await sequelize.sync();
    
    const role_admin = await Roles.findOne({where: {id: 1}});
    const role_client = await Roles.findOne({where: {id: 2}});
    if (!role_admin)
        await newRole('admin', 'Administrateur de l\'application');
    if (!role_client)
        await newRole('client', 'Client avec autorisations réduites');
    const admin = await Users.findOne({where: {courriel: 'admin@devflix.ca'}});
    if (!admin)
        await newUser('admin', 'admin', 'admin@devflix.ca', "1", 'admin');
    
    return{};
}