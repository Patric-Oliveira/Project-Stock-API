const { Model, DataTypes, Sequelize } = require('sequelize');

class Category extends Model {
    static init(sequelize){
        super.init({
            name: {
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
            tableName: 'categories',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Product, {foreignKey: 'product_id'}); 
    }
}

module.exports = Category;


