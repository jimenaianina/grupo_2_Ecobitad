'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('products', [
      {
        product_name: "Cepillo de dientes ecológico",
        product_description: "Este es un cepillo de dientes ecológico",
        category_id: "",
        color_id: [1 , 2, 3],
        size_id: [],
<<<<<<< HEAD
=======
        image_id: [4, 5, 6],
>>>>>>> 8d528a30ee7a9bbd5d9dfbe21e284fba85ff7623
        price: 350,
        stock: 100
      },
      {
        product_name: 'Acondicionador solido',
        product_description: 'El Acondicionador sólido de Sentida Botanica nutre el cabello, dejándolo suave y sedoso de manera natural',
        category_id: '',
        color_id: [],
        size_id: [],
<<<<<<< HEAD
=======
        image_id: [1, 2, 3],
>>>>>>> 8d528a30ee7a9bbd5d9dfbe21e284fba85ff7623
        price: 600,
        stock: 150
      },
      {
        product_name: 'Jabonera',
        product_description: "Esta jabonera es clave para apoyar cualquier jabon o producto sólido que felizmente no lleva packaging. Para que tus jabones y productos sólidos no se pongan blandos y duren más tiempo en buenas condiciones, es importante que las pastillas se sequen al aire. De esta manera, evitemos que acumulen agua y se desperdicie producto. Materiales: 100% Madera.",
        category_id: "",
        color_id: [],
        size_id: [3, 4],
        image_id: [7, 8, 9],
        price: 450,
        stock: 80
      },
      {
        product_name: 'Bolsas biodegradables',
        product_description: "Estas son bolsas ecológicas reutilizables. Se hacen pocket, en una dimension de 8x10 cuando estan plegadas. Extendidas son de 42x38 cm. Dale a tus bolsas el uso que quieras, para llevarlas siempre en la mochila, cartera y que nunca te falte una bolsa extra. Materiales: 100% Poliester",
        category_id: "",
        color_id: [4, 5, 6, 7, 8],
        size_id: [],
        image_id: [10],
        price: 500,
        stock: 100
      },
      {
        product_name: 'Botellas de Acero Inoxidable',
        product_description: "Botella Térmica 600 ml. 20 hs bebida fría. 10 hs bebida caliente. Doble capa de acero inoxidable 304 (18/8). Diámetro Boca: 48,5 mm. Ancho: 73 mm. Alto: 240 mm. Peso: 340 g. Tapa: Rosca de acero con terminación en bambú",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [11, 12],
        price: 2450,
        stock: 50
      },
      {
        product_name: 'Cubiertos de bambú',
        product_description: "Kit de cubiertos de bambú, ideales para tener siempre a mano y evitar todo esos descartes plásticos que se generan cuando comemos de paso. El kit incluye: Tenedor, cuchillo y cuchara. Materiales: Bambú: Es una de las plantas con mayor tasa de crecimiento del mundo, su recoleccion no produce deforestación de bosques y absorbe un 30% más de CO2 que otros árboles.",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [13, 14, 15],
        price: 280,
        stock: 200
      },
      {
        product_name: 'Peine de Madera',
        product_description: "Este Peine Antifrizz, al ser libre de plástico no produce estática. No quiebra la fibra capilar, evitando la caída del cabello. Distribuye la oleosidad del cuero cabelludo desde la raiz hasta las puntas.",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [16, 17, 18],
        price: 270,
        stock: 90
      },
      {
        product_name: 'Sorbetes de Acero',
        product_description: "Descripción de los sorbetes de acero inoxidable",
        category_id: "",
        color_id: [],
        size_id: [],
<<<<<<< HEAD
        price: 450,
        stock: 80
=======
        image_id: [19, 20, 21],
        price: 150,
        stock: 300
>>>>>>> 8d528a30ee7a9bbd5d9dfbe21e284fba85ff7623
      },
      {
        product_name: 'Shampoo Sólido',
        product_description: "Este Shampoo Sólido está diseñado especialmente para detener la caída del cabello, favoreciendo la irrigaciòn sanguínea y el crecimiento capilar. 100 gr | Aprobado por ANMAT.​ Ingredientes: Cocoil Isetionato de Sodio (tensioactivo natural derivado del coco), Aceite de coco, Aceite de Argán, Aceite Esencial de Romero.",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [22, 23, 24],
        price: 400,
        stock: 50
      },
      {
        product_name: 'Rasuradora metálica',
        product_description: "Nuestra rasuradora metálica es la mejor opción para una depilación libre de plástico. Medidas: (8 cm de largo/ 4 cm de ancho). Materiales: Acero inoxidable.",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [25, 26, 27],
        price: 900,
        stock: 20
      },
      {
        product_name: 'Hisopos biodegradables',
        product_description: "Descripción de hisopos biodegradables",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [28, 29, 30],
        price: 70,
        stock: 200
      },
      {
        product_name: 'Sorbetes de Bambú',
        product_description: "Para los amantes de las pajitas, las de bambú son la solución para poder seguir dandose el gusto, pero sin contaminar. Ingredientes, que nos encanta nombrar: 100% Bambu.",
        category_id: "",
        color_id: [],
        size_id: [],
        image_id: [31, 32, 33],
        price: 90,
        stock: 350
      },
      {
        product_name: 'Copita Menstrual',
        product_description: "Copita = (L).",
        category_id: "",
        color_id: [],
        size_id: [2, 3, 4],
        image_id: [34, 35, 36],
        price: 1700,
        stock: 50
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
  await queryInterface.bulkDelete('products', null, {});
  }
};