const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Product = require('./product.model');

let OrderSchema = new schema({
    product_requests: [],
    requester_id: {type: String},
    provider_id: {type: String}
});

let Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getAll = async function(limit) {
    return await Order.find().limit(limit);
}

module.exports.getByRequesterId = async function(id) {
    return await Order.find({requester_id: id});
}

module.exports.createOrder = async function(arrayOfProducts, requester_id) {
    let providerIdArray = [];
    let productArrays = [];

    for(let productIndex in arrayOfProducts)
    {
        if(!providerIdArray.includes(arrayOfProducts[productIndex].provider_id))
        {
            providerIdArray.push(arrayOfProducts[productIndex].provider_id);
            let providerArray = [];
            providerArray.push(arrayOfProducts[productIndex]);
            productArrays.push(providerArray);
        }
        else
        {
            let productArrayIndex = providerIdArray.indexOf(arrayOfProducts[productIndex].provider_id);
            productArrays[productArrayIndex].push(arrayOfProducts[productIndex]);
        }
    }
    for(let productArrayIndex in productArrays)
    {
        let currentArray = productArrays[productArrayIndex];
        for(let productIndex in currentArray)
        {
            let currentProduct = currentArray[productIndex];
            let stockProduct = await Product.getById(currentProduct._id);
            await Product.updateProductQuantity(currentProduct._id, stockProduct.quantity - currentProduct.quantity);
        }
        let orderToCreate = new Order();
        orderToCreate.product_requests = currentArray;
        orderToCreate.requester_id = requester_id;
        orderToCreate.provider_id = currentArray[0].provider_id;
        await Order.create(orderToCreate);
    }
}