const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '989991asG78_', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;