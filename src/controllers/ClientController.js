const Client = require('../models/Client');


module.exports = {

    // Index
    async index(req, res) {
        const clients = await Client.findAll({
            attributes: ['id', 'name', 'surname', 'email', 'phone', 'cpf', 'address', 'cep', 'district', 'city', 'uf'],
            order: [['id', 'DESC']],
        });
        res.json(clients);
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

            const client = await Client.findByPk(id)

            if(!client) {
                return res.status(400).json({
                    errors: ['Cliente não existe'],
                });
            }
            return res.json(client);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },

    //Store
    async store(req, res) {
        try {
            const client = await Client.create(req.body);
            return res.json(client);
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

            const client = await Client.findByPk(id)

            if(!client) {
                return res.status(400).json({
                    errors: ['Cliente não existe'],
                });
            }

            const clientUpdate = await client.update(req.body)
            return res.json(clientUpdate)
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },

    //Delete
    async delete(req, re) {
        try {
            const {id} = req.params;

            if(!id) {
                return res.status(400).json({
                    errors: ['Faltando ID']
                });
            }

            const client = await Client.findByPk(id)

            if(!client) {
                return res.status(400).json({
                    errors: ['Cliente não existe'],
                });
            }
            await client.destroy();
            return res.json({
                apagado: true,
            });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    },



}