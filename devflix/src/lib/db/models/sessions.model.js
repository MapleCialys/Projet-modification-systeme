import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import { sequelize } from '../db.js';
import { Roles } from './roles.model.js';
import { Users } from './users.model.js';

export const Sessions = sequelize.define("sessions", {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: "id"
        },
        allowNull: false
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


Sessions.belongsTo(Users, { foreignKey: 'user_id', as: 'users' });
Users.hasMany(Sessions, { foreignKey: 'user_id', as: 'users' });

sequelize.sync().then(() => {
    console.log('Sessions table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
