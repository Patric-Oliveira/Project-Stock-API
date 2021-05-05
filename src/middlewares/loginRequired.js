const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = {

       async middleware(req, res, next) {
        const {authorization} = req.headers;

        if(!authorization) {
            return res.status(401).json({
                errors: ['Login required'],
            });
        }

        const [, token] = authorization.split(' ');

        try {
            const dados = jwt.verify(token, process.env.TOKEN_SECRET);
            const {id, email} = dados;

            //checando se o email pertece ao mesmo usuario
            const user = await User.findOne({
                where: {
                    id,
                    email,
                }
            });

            //precisa pegar um novo token para falzr as alteraçoes ou seja precisa logar
            if(!user) {
                return res.status(401).json({
                    errors: ['Usuário invalido'],
                });
            }

            req.userId = id;
            req.userEmail = email;
            return next();
        } catch (e) {
            return res.status(401).json({
                errors: ['Token expirado ou inválido.'],
            });
        }
    }
}

