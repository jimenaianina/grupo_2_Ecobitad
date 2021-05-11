const path = require('path');
const { body } = require('express-validator');

const validacionProducto = [
    body('name').notEmpty().isLength({ min: 5 }).withMessage('El nombre del producto debe tener al menos 5 caracteres'), 
    body('description').notEmpty().isLength({ min: 20 }).withMessage('La descripción del producto debe tener al menos 20 caracteres'), 
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