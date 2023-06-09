const productController = require('../controllers/productController')

const routes = (app) => {
    // app.get('/products/:id', productController.getProduct);
    app.get('/products', productController.getProducts)
    // app.post('/products', productController.addProduct)
}

module.exports = routes;
