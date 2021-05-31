const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {

  async store(req, res) {

    const {email = '', password = ''} = req.body;

    if(!email || !password) {
        return res.status(401).json({
            errors: ['Credenciais invalidas'],
        });
    }

    const user = await User.findOne({where: {email} });

    if(!user) {
        return res.status(401).json({
            errors: ['Usuário não existe'],
        });
    }

    if(!(await user.passwordIsValid(password))) {
        return res.status(401).json({
            errors: ['Senha inválida'],
        });
    }

    const {id} = user; //id 
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION, 
    });

        return res.json({token});
    }

}