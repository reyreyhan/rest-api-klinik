'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.UserProfile, {
      foreignKey: "id_user",
      as: "profile"
    });

    User.hasMany(models.Berobat, {
      foreignKey: "id_user",
      as: "berobat"
    })
  };
  return User;
};