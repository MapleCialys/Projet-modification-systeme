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

sequelize.addHook('afterSync', async () => {
    await Roles.findOrCreate({
        where: { nom: 'Admin' },
        defaults: {
            nom: 'Admin',
            description : 'Administrateur du système',
        }
    });
    await Roles.findOrCreate({
        where: { nom: 'Client' },
        defaults: {
            nom: 'Client',
            description : 'Client régulier',
        }
    });
})

sequelize.sync().then(() => {
    console.log('Roles table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
}); 