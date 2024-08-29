import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import { Users } from './users.model.js';

export const Paniers = sequelize.define("Paniers", {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    }
});

Paniers.belongsTo(Users, { foreignKey: 'user_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Paniers table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});