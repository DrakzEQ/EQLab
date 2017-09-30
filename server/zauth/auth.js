'use strict';

const Sequelize              = require('sequelize'),
      passportLocalSequelize = require('passport-local-sequelize'),
      path                   = require("path"),
      env                    = process.env.NODE_ENV || "development",
      config                 = require(path.join(__dirname, '..', 'config', 'auth_db.json'))[env],
      auth_db                = new Sequelize(config);


const User = auth_db.define('user', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('user', 'dev', 'admin'),
    defaultValue: 'user'
  },
  username: {
    type: Sequelize.STRING(32),
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  hash: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_login: {
    type: Sequelize.DATE
  }
});

passportLocalSequelize.attachToUser(User, {
	usernameField: 'username'
});

module.exports = { 
  auth_db, 
  User 
};