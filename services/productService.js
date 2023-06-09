const productRepository = require('../repositories/productRepository');

const getProducts = async (catagories, characters) => {
    console.log('Service: getProduct');
    console.log(catagories)
    console.log(characters)
    let invalidCatagory = false
    if (catagories) {
        //validate category
    }
    if (invalidCatagory) {
        throw new Error('Phil,Unknown category')
    }

    let invalidCharacter = false
    if (characters) {
        //validate character
    }
    if (invalidCharacter) {
        throw new Error('Phil,Unknown character')
    }

    return await productRepository.getProducts();
};

const getProduct = async (productName) => {
    console.log('Service: getProduct')
    return await productRepository.getProduct(productName);
};

const addProduct = async (newProduct) => {
    console.log('Service: addProduct')
    //could validate newProduct details here
    return await productRepository.addProduct(newProduct)
}

module.exports.getProducts = getProducts
module.exports.getProduct = getProduct
module.exports.addProduct = addProduct
