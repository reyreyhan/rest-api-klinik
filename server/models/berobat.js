'use strict';
module.exports = (sequelize, DataTypes) => {
  const Berobat = sequelize.define('Berobat', {
    id_user: DataTypes.INTEGER,
    tgl: DataTypes.STRING,
    poli: DataTypes.STRING,
    dokter: DataTypes.STRING,
    reservasi: DataTypes.STRING,
    jam: DataTypes.STRING,
    nmr: DataTypes.INTEGER
  }, {});
  Berobat.associate = function(models) {
    // associations can be defined here
  };
  return Berobat;
};