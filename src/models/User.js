const { Model, DataTypes } = require('sequelize');
const bcrypt =  require('bcryptjs');

class User extends Model {
    static init(sequelize){
        super.init({
            name: {
                type: DataTypes.STRING,
                defaultValue: '',
                Validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email já existe'
                },
                Validate: {
                    isEmail: {
                        msg: 'Email inválido',
                    },
                },
            },
            password_hash: {
                type: DataTypes.STRING,
                defaultValue: '',
            },
            password: {
                type: DataTypes.VIRTUAL,
                defaultValue: '',
                Validate: {
                    len: {
                        args: [6, 50],
                        msg: 'A senha precisa ter entre 6 a 50 caracteres',
                    },
                },
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    passwordIsValid(password){
        return bcrypt.compare(password, this.password_hash);
    }
}

module.exports = User;


