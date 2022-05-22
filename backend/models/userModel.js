
const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdat: {
        type: Sequelize.DATE,
        allowNull: false
    },
    transactions: {
        type: Sequelize.TEXT,
    }
}, {
    timestamps: false
});

module.exports = User;