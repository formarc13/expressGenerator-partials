const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), "utf-8"))

module.exports = {
    index: function(req, res, next) {
        res.render('index', { 
            title: 'Comisión 13',
            products: products 
        });
    },
    detail: function(req, res) {
        let idProducto = +req.params.id;
        let product = products.find(prod => prod.id === idProducto)
        res.render('productDetail', {
            title: product.name,
            product
        })
    }
}