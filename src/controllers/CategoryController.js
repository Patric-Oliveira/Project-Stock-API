const Category = require('../models/Category');
const Product = require('../models/Product');

module.exports = {


  //Index
  async index(req, res) {
    const categories  = await Category.findAll();
        res.status(200).json(categories);
    },

    //Show
    async show(req, res) {
      try {
        const {id} = req.params;

          if(!id) {
              return res.status(400).json({
                  errors: ['Faltando ID']
              });
          }

          const category  = await Category.findByPk(id);

          if(!category) {
              return res.status(400).json({
                  errors: ['Categoria não existe'],
              });
          }
          return res.json(category);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },


  //Store
  async store(req, res) {
    try {
        const category = await Category.create(req.body);
        return res.json(category);
      }catch (e) {
          return res.status(400).json({
              errors: e.errors.map((err) => err.message),
          });
      }
    },


//Update
async update(req, res) {
  try {
      const {id} = req.params;

      if(!id) {
          return res.status(400).json({
              errors: ['Faltando ID']
          });
      }

      const category  = await Category.findByPk(id);

      if(!category) {
          return res.status(400).json({
              errors: ['Categoria não existe'],
          });
      }
      
      const categoryUpdate = await category.update(req.body)

      return res.json(categoryUpdate)
    } catch (e) {
        return res.status(400).json({
            errors: e.errors.map((err) => err.message),
        });
    }
 },

//Delete
async delete(req, res) {
  try {
      const {id} = req.params;

      if(!id) {
          return res.status(400).json({
              errors: ['Faltando ID']
          });
      }

      const category  = await Category.findByPk(id);

      if(!category) {
          return res.status(400).json({
              errors: ['Categoria não existe'],
          });
      }
      await category.destroy();
      return res.json({
          Deletado: true,
      });
  } catch (e) {
      return res.status(400).json({
          errors: e.errors.map((err) => err.message),
      });
  }
},

}