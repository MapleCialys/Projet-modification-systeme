import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Users } from './users.model.js';

export const Panier = sequelize.define("panier", {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    }
});

Panier.belongsTo(Users, { foreignKey: 'user_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Panier table created successfully!');
}).catch((error) => {
    console.error('Panier to create table : ', error);
});