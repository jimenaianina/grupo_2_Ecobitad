'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('products', [
      {
        product_name: "Cepillo de dientes ecológico",
        product_description: "Este es un cepillo de dientes ecológico",
        category_id: "",
        color_id: [
        ],
        size_id: [],
        price: 350,
        stock: 100
      },
      {
        product_name: 'Acondicionador solido',
        product_description: 'El Acondicionador sólido de Sentida Botanica nutre el cabello, dejándolo suave y sedoso de manera natural',
        category_id: '',
        color_id: [
        ],
        size_id: [],
        price: 600,
        stock: 150
      },
      {
        product_name: 'Jabonera',
        product_description: "Esta jabonera es clave para apoyar cualquier jabon o producto sólido que felizmente no lleva packaging. Para que tus jabones y productos sólidos no se pongan blandos y duren más tiempo en buenas condiciones, es importante que las pastillas se sequen al aire. De esta manera, evitemos que acumulen agua y se desperdicie producto. Materiales: 100% Madera.",
        category_id: "",
        color_id: [
        ],
        size_id: [],
        price: 450,
        stock: 80
      },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('products', null, {});
  }
};