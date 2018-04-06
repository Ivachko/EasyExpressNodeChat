// Example model
var Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    lastnNme: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    username: {
      type: Sequelize.TEXT
    },

    about: {
      type: Sequelize.TEXT
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lastLogin: {
      type: Sequelize.DATE
    }
  })

  return User
}
