const { Model, DataTypes, Sequelize } = require('sequelize');
const appConfig = require('../config/app');

class Photo extends Model {
    static init(sequelize){
        super.init({
            originalname: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            filename: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            url: {
                type: DataTypes.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`;
                }
            },
        }, {
            sequelize,
            tableName: 'photos',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Employees, {foreignKey: 'employess_id'}); //Employess
    }
}

module.exports = Photo;


