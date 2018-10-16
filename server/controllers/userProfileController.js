const UserProfile = require("../models").UserProfile;

module.exports = {
  create(req, res) {
    return UserProfile
    .create({
      nama: req.body.nama,
      ttl: req.body.ttl,
      nik: req.body.nik,
      jk: req.body.jk,
      kerja: req.body.kerja,
      alamat: req.body.alamat,
      hp: req.body.hp,
      ibu: req.body.ibu,
      role: req.body.role,
      id_user: req.params.id_user,
    })
    .then(userProfile => res.status(201).send(userProfile))
    .catch(error => res.status(400).send(error));
  }
};

