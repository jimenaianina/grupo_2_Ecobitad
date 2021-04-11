const fs = require('fs');

const Product = {

	filename : "../database/products.json",
	getData : function () {
        return fs.readFileSync(this.filename, 'utf8');
    },

    generateId: function() {
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id+1;
        } 
        return 1;
    },

    findAll: function () {
        return this.getData()
    }, 

    findByPK: function(id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id === id);
        return ProductFound;
    },

    findByField: function(field, text) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text);
        return productFound;
    },

	create : function(productData) {
        let allProducts = this.findAll();
        let newProduct = { 
            id: this.generateId(), 
            ...productData 
    }
        allProducts.push(productData);
        fs.writeFileSync(this.filename, JSON.stringify(allProducts, null, ' '))
        return true
    },

    delete: function(id) {
        let allProducts = this.findAll();
        let findAllProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.filename, JSON.stringify(allProducts, null, ' '));
        return true
    }
}

module.exports = Product;