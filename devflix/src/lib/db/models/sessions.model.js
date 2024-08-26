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



// Executing (default): SELECT `sessions`.`id`,
//  `sessions`.`user_id`, `sessions`.`uuid`,
//   `sessions`.`createdAt`, `sessions`.`updatedAt`,
//    `user`.`id` AS `user.id`,
//     `user`.`nom` AS `user.nom`,
//      `user`.`prenom` AS `user.prenom`
//      , `user`.`courriel` AS `user.courriel`,
//       `user`.`password` AS `user.password`,
//        `user`.`role_id` AS `user.role_id`,
//         `user`.`createdAt` AS `user.createdAt`,
//          `user`.`updatedAt` AS `user.updatedAt` 
//          FROM `sessions` AS `sessions` 
//          LEFT OUTER JOIN 
//          `users` AS `user`
//           ON `sessions`.`user_id` = `user`.`id` 
//           WHERE `sessions`.`uuid` = '8f916a81-6927-4325-b5d5-1bb916d71a4e'
//            LIMIT 1;