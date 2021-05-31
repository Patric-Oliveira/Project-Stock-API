const { Model, DataTypes, Sequelize } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            activate_product: {
                type: DataTypes.TINYINT,
                defaultValue: '', 
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            name_product: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            sku_code: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            barcode: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            price: {
                type: DataTypes.DOUBLE,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            quantity: {
                type: DataTypes.INTEGER,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            in_stock: {
                type: DataTypes.TINYINT,
                defaultValue: '', 
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            long_description: {
                type: DataTypes.TEXT,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não  pode ficar vazio',
                    },
                },
            },
            short_description: {
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
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Category, {foreignKey: 'product_id'}); 
    }
}

module.exports = Product;


