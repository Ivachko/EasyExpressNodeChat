// Example model


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
      mail: DataTypes.STRING,
      password: DataTypes.STRING,
     
    }, {
      classMethods: {
        associate: (models) => {
          // example on how to add relations
          // Article.hasMany(models.Comments);
        }
      }
    });
  
    return User;
  };
  
  