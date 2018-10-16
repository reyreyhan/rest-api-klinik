'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define('UserProfile', {
    id_user: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    ttl: DataTypes.STRING,
    nik: DataTypes.STRING,
    jk: DataTypes.STRING,
    kerja: DataTypes.STRING,
    alamat: DataTypes.STRING,
    hp: DataTypes.STRING,
    ibu: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});
  UserProfile.associate = function(models) {
    // associations can be defined here
  };
  return UserProfile;
};