const multer = require('multer');
const multerConfig = require('../config/multer');

const Photo = require('../models/Photo')

const upload = multer(multerConfig).single('files')

module.exports = {

  store(req, res) {
        return upload(req, res, async (error) => {
          if(error) {
            return res.status(400).json({
              errors: [error.code],
            })
          }

            try {
            
              const { originalname, filename } = req.file;
              const { employess_id } = req.body;
              const photo = await Photo.create({originalname, filename, employess_id});

              return res.json(photo);
            } catch (e) {
              return res.status(400).json({
                errors: ['Photo não existe'],
              })
            }
        });
      }
}