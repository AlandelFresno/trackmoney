const User = require('./userModel');
const Operation = require('./operationModel');
const db = require('../database/connection');

User.hasMany(Operation,{ onDelete: 'CASCADE', onUpdate:'CASCADE', foreignKey: {name: 'userID', allowNull: false}});
Operation.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});
// Operation.belongsTo(User);

db.authenticate().then(async() => {
    // await User.sync({force: true});
    await Operation.sync({force: true});
}).catch ( err => {
    console.log(err);
});

module.exports = {
    User,
    Operation
};