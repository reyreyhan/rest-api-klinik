const Anamnese = require('../models').Anamnese;
const User = require("../models").User;
const UserProfile = require('../models').UserProfile;

module.exports = {
    create(req, res) {
        return Anamnese
            .create({
                anamnese: req.body.anamnese,
                diagnosa: req.body.diagnosa,
                terapi: req.body.terapi,
                dokter: req.body.dokter,
                id_user: req.params.id_user, 
            })
            .then(anamnese => res.status(201).send(anamnese))
            .catch(error => res.status(400).send(error))
    },

    anamneseDetail(req, res) {
        return User
            .findById(req.params.id_user, {
                include: [{
                    model: Anamnese,
                    as: 'anamnese',
                }]
            })
            .then(user => {
                if(!user) {
                    return res.status(404).send({
                        message: 'user tidak ditemukan'
                    })
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(404).send(error))

    }
}