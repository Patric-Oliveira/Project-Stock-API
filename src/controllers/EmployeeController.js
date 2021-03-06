const Employee = require('../models/Employee');
const { store } = require('./TokenController');
const Photo = require('../models/Photo');

module.exports = {

    async index(req, res) {
        const employees = await Employee.findAll({
            attributes: ['id', 'name', 'surname', 'email', 'phone', 'cpf', 'address', 'cep', 'district', 'city', 'uf' ],
            order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
            include: {
                model: Photo,
                attributes: ['id', 'originalname', 'filename', 'url']
            },
        });
        res.json(employees)
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

            const employee = await Employee.findByPk(id, {
                attributes: ['id', 'name', 'surname', 'email', 'phone', 'cpf', 'address', 'cep', 'district', 'city', 'uf' ],
                order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
                include: {
                    model: Photo,
                    attributes: ['id', 'originalname', 'filename', 'url']
                },
            })

            if(!employee) {
                return res.status(400).json({
                    errors: ['Funcionario não existe'],
                });
            }
            return res.json(employee)
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },

    
    //Store
    async store(req, res) {
        try {
          const employee = await Employee.create(req.body);
            return res.json(employee)
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

            const employee = await Employee.findByPk(id)

            if(!employee) {
                return res.status(400).json({
                    errors: ['Funcionario não existe'],
                });
            }
            
            const employeeUpdate = await employee.update(req.body)

            return res.json(employeeUpdate)
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

            const employee = await Employee.findByPk(id)

            if(!employee) {
                return res.status(400).json({
                    errors: ['Funcionario não existe'],
                });
            }
            await employee.destroy();
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