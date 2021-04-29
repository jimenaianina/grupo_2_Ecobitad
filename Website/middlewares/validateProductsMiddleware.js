const path = require('path');
const { body } = require('express-validator');

const validacionProducto = [
    body('name').notEmpty().isLength({ min: 5 }).withMessage('Por favor escribir un nombre'), 
    body('description').notEmpty().isLength({ min: 20 }).withMessage('Por favor escribir una descripción'), 
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error ("Las extensiones del archivo permitidas son " + acceptedExtensions.join(', '));
            }
        }
        return true;
        })
    ];

module.exports = validacionProducto