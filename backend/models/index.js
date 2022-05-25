const User = require('./userModel');
const Operation = require('./operationModel');

User.hasMany(Operation,{ onDelete: 'CASCADE', onUpdate:'CASCADE', foreignKey: {name: 'userID', allowNull: false}});
Operation.belongsTo(User, {foreignKey: {name: 'userID', allowNull: false}});


module.exports = {
    User,
    Operation
};