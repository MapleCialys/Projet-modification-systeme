import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db.js';
import { Roles } from './roles.model.js';

export const Users = sequelize.define("users", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courriel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: "id"
        },
        allowNull: false
    }
},{
    paranoid: true, // Permet à sequelize de faire de la soft-deletion
});

Users.beforeCreate(async (user, option) => {
    user.password = await bcrypt.hash(user.password, 10);
});


Users.belongsTo(Roles, { foreignKey: 'role_id', as: 'role' });
Roles.hasMany(Users, { foreignKey: 'role_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});