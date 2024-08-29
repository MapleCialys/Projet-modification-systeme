import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Items } from './items.model.js';
import { Users } from './users.model.js';

export const Items_Paniers = sequelize.define("items_Paniers", {
    items_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Items,
            key: "id"
        },
        allowNull: false
    },
    users_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    }
});

Items_Paniers.belongsTo(Items, { foreignKey: 'items_id', as: 'items' });
Items_Paniers.belongsTo(Users, { foreignKey: 'users_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Items_Paniers table created successfully!');
}).catch((error) => {
    console.error('Items_Paniers to create table : ', error);
});