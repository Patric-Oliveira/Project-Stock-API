const Employee = require('../models/Employee');
const { store } = require('./TokenController');

module.exports = {

    // Index
    async index(req, res) {
        const employees = await Employee.findAll();
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

            const employee = await Employee.findByPk(id)

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