const { Model, DataTypes } = require('sequelize');

class Employees extends Model {
    static init(sequelize){
        super.init({
            name: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 150],
                        msg: 'Nome precisa ter entre 3 e 150 caracteres.',
                    },
                },
            },
            surname: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                defaultValue: '',
                unique: {
                    msg: 'E-mail já existe'
                },
                validate: {
                    isEmail: {
                        msg: 'E-mail inválido',
                    },
                },
            },
            phone: {
                type: DataTypes.BIGINT,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 14],
                        msg: 'Celular precisa ter entre 8 a 14 caracteres.',
                    },
                },
            },
            cpf: {
                type: DataTypes.BIGINT,
                defaultValue: '',
                validate: {
                    len: {
                        args: [14, 14],
                        msg: 'CPF precisa ter 14 caracteres',
                    },
                },
            },
            address: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [5, 255],
                        msg: 'O endereço precisa ter entre 5 e 255 caracteres.',
                    },
                },
            },
            cep: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    IsInt: {
                        msg: 'CEP precisa ser um numero inteiro',
                    },
                },
            },
            district: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Bairro precisa ter entre 2 e 255 caracteres.',
                    },
                },
            },
            city:  {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Cidade precisa ter entre 2 e 255 caracteres.',
                    },
                },
            },
            uf: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2, 255],
                        msg: 'Cidade precisa ter entre 2 e 255 caracteres.',
                    },
                },
            },
        }, {
            sequelize,
        });
        return this;
    }
}

module.exports = Employees;


