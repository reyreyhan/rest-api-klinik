'use strict';
module.exports = (sequelize, DataTypes) => {
  const Anamnese = sequelize.define('Anamnese', {
    anamnese: DataTypes.STRING,
    diagnosa: DataTypes.STRING,
    terapi: DataTypes.STRING,
    dokter: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});
  Anamnese.associate = function(models) {
    // associations can be defined here
  };
  return Anamnese;
};