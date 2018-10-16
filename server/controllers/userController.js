const User = require('../models').User
const UserProfile = require('../models').UserProfile

module.exports = {
    create(req, res) {
        return User
            .create({
                email: req.body.email,
                password: req.body.password,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
    },

    login(req, res) {
        return User
            .find({
                where: {
                    email: req.body.email,
                    password: req.body.password,
                },
                include: [{
                    model: UserProfile,
                    as: 'profile',
                }],
            })
            .then(user => {
                if(!user) {
                    return res.status(404).send({
                        message: "user not found"
                    })
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(400).send(error))
    },

    detail(req, res) {
        return User
            .findById(req.params.id, {
                include: [{
                    model: UserProfile,
                    as: 'profile'
                }]
            })
            .then(user => {
                if(!user) {
                    return res.status(404).send({
                        message: 'user not found'
                    })
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(400).send(error))
    }
}