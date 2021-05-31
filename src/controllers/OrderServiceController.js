const OrderService = require('../models/OrderService')
const Client = require('../models/Client')

module.exports = {

  // Index
  async index(req, res) {
  const orderServices = await OrderService.findAll({
    attributes: ['id', 'vehicle_plate', 'brand', 'model', 'vehicle_color', 'year', 'fuel', 'problem_reported', 'problem_found', 'service_performed', 'total_parts', 'total_services', 'total_price', 'responsible'],
    order: [['id', 'DESC'], [Client, 'id', 'DESC']],
    include: {
        model: Client,
        attributes: ['id', 'surname', 'email', 'phone', 'cpf', 'address', 'cep', 'district', 'city', 'uf'],
    },
  });
  res.json(orderServices);
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

          const orderService = await OrderService.findByPk(id, {
            attributes: ['id', 'vehicle_plate', 'brand', 'model', 'vehicle_color', 'year', 'fuel', 'problem_reported', 'problem_found', 'service_performed', 'total_parts', 'total_services', 'total_price', 'responsible'],
            order: [['id', 'DESC'], [Client, 'id', 'DESC']],
            include: {
                model: Client,
                attributes: ['id', 'surname', 'email', 'phone', 'cpf', 'address', 'cep', 'district', 'city', 'uf'],
            },
          })

          if(!orderService) {
              return res.status(400).json({
                  errors: ['Ordem de serviço não existe'],
              });
          }
          return res.json(orderService);
      } catch (e) {
          return res.status(400).json({
              errors: e.errors.map((err) => err.message),
          });
      }
  },


   //Store
   async store(req, res) {
    try {
      const orderService = await OrderService.create(req.body);
        return res.json(orderService)
    } catch (e) {
        return res.status(400).json({
            errors: ['Cliente não existe'],
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

      const orderService = await OrderService.findByPk(id)

      if(!orderService) {
          return res.status(400).json({
              errors: ['Ordem de serviço não existe'],
          });
      }
      
      const orderServiceUpdate = await orderService.update(req.body)

      return res.json(orderServiceUpdate)
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

      const orderService = await OrderService.findByPk(id)

      if(!orderService) {
          return res.status(400).json({
              errors: ['Ordem de serviço não existe'],
          });
      }
      await orderService.destroy();
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