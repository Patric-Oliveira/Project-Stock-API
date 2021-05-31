const Product = require('../models/Product');

module.exports = {

  //Index
    async index(req, res) {
      const products = await Product.findAll();
          res.status(200).json(products);
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

          const product = await Product.findByPk(id);

          if(!product) {
              return res.status(400).json({
                  errors: ['Produto não existe'],
              });
          }
          return res.json(product);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },


  //Store
    async store(req, res) {
      try {
        const product = await Product.create(req.body);
          return res.json(product)
        } catch (e) {
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

        const product = await Product.findByPk(id);

        if(!product) {
            return res.status(400).json({
                errors: ['Produto não existe'],
            });
        }
        
        const productUpdate = await product.update(req.body)

        return res.json(productUpdate)
        }catch (e) {
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

      const product = await Product.findByPk(id);

      if(!product) {
          return res.status(400).json({
              errors: ['Produto não existe'],
          });
      }
      await product.destroy();
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