const productService = require('../services/productService')

const getProducts = (req, res) => {
    console.log('Controller: getProduct')
    const categories = req.query.categories
    const characters = req.query.characters
    productService.getProducts(categories, characters)
        .then((allProducts) => {
            const response = {
                message: "Successfully found products.",
                data: allProducts
            };
            res.send(response)
        })
        .catch((error) => {
            // Handle any errors that occur during the process
            let msg = 'Unexpected error'
            let code = 500
            if (error.message.startsWith('Phil')) {
                const errorArray = error.message.split(',')
                msg = errorArray[1]
                code = 400
            }

            const response = {
                message: msg,
                data: []
            };
            res.status(code).send(response)
        });
};

const getProduct = (req, res, productName) => {
    console.log('Controller: getProduct');
    productService.getProduct(req.params.productName).then((product) => res.send(product))
}
// send as data already comes back as JSON. res.json is when the data need to be turned into json
const addProduct = (req, res) => {
    console.log('Controller: addProduct')
    const newProduct = req.body.Product
    productService.addProduct(newProduct).then((result) => res.json(result))
}

module.exports.getProducts = getProducts
module.exports.getProduct = getProduct
module.exports.addProduct = addProduct

