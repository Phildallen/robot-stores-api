const dbService = require('../services/dbService')
const objectId = require('mongodb').ObjectId

let productList = null;
dbService.connectToDB().then((db) => productList = db.collection('products'));

const getProducts = async () => {
    console.log('Repository: getProducts');
    return await productList.find({}).toArray()
}

const getProduct = async (productName) => {
    console.log('Repository: getProducts')
    return await productList.findOne({"name":productName})
}

const addProduct = async (newProduct) => {
    console.log('Repository: addProduct')
    return await productList.insertOne(newProduct)
}



module.exports.getProducts = getProducts
module.exports.getProduct = getProduct
module.exports.addProduct = addProduct
