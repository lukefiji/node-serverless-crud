const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://luke@localhost:5432/luke');

const Todo = require('./models/Todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  Todo
};

// Syncs model definition with database and creates a table
db.sequelize.sync();

module.exports = db;
