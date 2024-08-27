import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

export const Items = sequelize.define("items", {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_item: {
        type: DataTypes.STRING,
        allowNull: true
    },
    bande_annonce: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    quantite_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync().then(() => {
    console.log('Intems table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});