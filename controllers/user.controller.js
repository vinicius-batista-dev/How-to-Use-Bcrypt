const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');


//Criar um novo usuário e criptogrando a senha
exports.create = (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
    }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}
     