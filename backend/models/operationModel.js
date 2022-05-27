const Sequelize = require('sequelize');
const db = require('../database/connection');

const Operation = db.define('operations', {
    operationType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    createAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Operation;