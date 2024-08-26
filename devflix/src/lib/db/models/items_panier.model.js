import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Items } from './items.model.js';
import { Panier } from './panier.model.js';

export const Items_Panier = sequelize.define("panier", {
    items_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Items,
            key: "id"
        },
        allowNull: false
    },
    panier_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Panier,
            key: "id"
        },
        allowNull: false
    }
});

Items_Panier.belongsTo(Items, { foreignKey: 'items_id', as: 'items' });
Items_Panier.belongsTo(Panier, { foreignKey: 'panier_id', as: 'panier' });

sequelize.sync().then(() => {
    console.log('Items_Panier table created successfully!');
}).catch((error) => {
    console.error('Items_Panier to create table : ', error);
});