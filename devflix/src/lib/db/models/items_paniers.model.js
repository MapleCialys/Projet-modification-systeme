import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Items } from './items.model.js';
import { Paniers } from './Paniers.model.js';

export const Items_Paniers = sequelize.define("items_Paniers", {
    items_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Items,
            key: "id"
        },
        allowNull: false
    },
    Paniers_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Paniers,
            key: "id"
        },
        allowNull: false
    }
});

Items_Paniers.belongsTo(Items, { foreignKey: 'items_id', as: 'items' });
Items_Paniers.belongsTo(Paniers, { foreignKey: 'Paniers_id', as: 'Paniers' });

sequelize.sync().then(() => {
    console.log('Items_Paniers table created successfully!');
}).catch((error) => {
    console.error('Items_Paniers to create table : ', error);
});