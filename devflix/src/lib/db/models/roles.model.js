import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Roles = sequelize.define("roles", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('Roles table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});