const Berobat = require("../models").Berobat;
const User = require("../models").User;
const UserProfile = require("../models").UserProfile;

module.exports = {
    create(req, res) {
        var berobatCount = Berobat.count({ like: {reservasi: req.body.tgl}})
        berobatCount.then(result => {
            var hasil = result + 1
            return Berobat
                .create({
                    tgl: req.body.tgl,
                    poli: req.body.poli,
                    dokter: req.body.dokter,
                    jam: req.body.jam,
                    nmr: hasil,
                    reservasi: req.body.tgl + hasil,
                    id_user: req.params.id_user
                })
                .then(berobat => res.status(201).send(berobat))
                .catch(error => res.status(400).send(error))
        })
    },

    riwayat(req, res) {
        return UserProfile
            .find({
                where: {
                    nik: req.body.nik
                }
            })
            .then(userProfile => {
                if (!userProfile) {
                    return res.status(404).send({
                        message: 'user not found',
                    })
                }
                return res.status(200).send(userProfile);
            })
            .catch(error => res.status(404).send(error))
    },

    riwayatDetail(req, res) {
    return User
        .findById(req.params.id_user, {
            include: [{
                model: Berobat,
                as: 'berobat',
            }]
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'user tidak ditemukan',
                })
            }
            return res.status(200).send(user);
        })
        .catch(error => res.status(404).send(error))
    },
};

