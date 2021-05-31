const { Model, DataTypes, Sequelize } = require('sequelize');
const appConfig = require('../config/app');

class OrderService extends Model {
    static init(sequelize){
        super.init({
            vehicle_plate: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            brand: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            model: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            vehicle_color: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            year: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            fuel: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            problem_reported: {
                type: DataTypes.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            problem_found: {
                type: DataTypes.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            service_performed: {
                type: DataTypes.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            total_parts: {
                type: DataTypes.DOUBLE,
                defaultValue: '',
            },
            total_services: {
                type: DataTypes.DOUBLE,
                defaultValue: '',
            },
            total_price: {
                type: DataTypes.DOUBLE,
                defaultValue: '',
            },
            responsible: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
        }, {
            sequelize,
            tableName: 'ordersservices',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Client, {foreignKey: 'client_id'}); 
    }
}

module.exports = OrderService;


