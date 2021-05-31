const { Model, DataTypes } = require('sequelize');

class Client extends Model {
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
                unique: {
                    msg: 'E-mail já existe'
                },
            },
            phone: {
                type: DataTypes.STRING,
            },
            cpf: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            cep: {
                type: DataTypes.STRING,
            },
            district: {
                type: DataTypes.STRING,
            },
            city:  {
                type: DataTypes.STRING,
            },
            uf: {
                type: DataTypes.STRING,
            },
        }, {
            sequelize,
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.OrderService, {foreignKey: 'client_id'}); 
    }
}

module.exports = Client;


