const mongoose = require('mongoose');
const schema = mongoose.Schema;

let ProductSchema = new schema({
    name: {type: String, required: true, max: 100},
    provider_id: {type: String, required: true},
    quantity: {type: Number, required: true},
    image_url: {type: String, required: false},
    category_id: {type: String, required: true}
})

let Product = module.exports = mongoose.model('Product', ProductSchema);

let getAvailableProducts = function(arr) {
    var availableProducts = [];
    for (var product in arr)
    {
        if(arr[product].quantity > 0)
        {
            availableProducts.push(arr[product]);
        }
    }
    return availableProducts;
}

module.exports.addProduct = async function(product, callback) {
    await Product.create(product);
}

module.exports.getAllAvailable = async function(limit) {
    const arr = await Product.find().limit(limit);
    return getAvailableProducts(arr);
}

module.exports.getByCategory = async function(category, limit) {
    const arr = await Product.find({ category_id: category})
    return getAvailableProducts(arr);
}

module.exports.getById = function(id, callback) {
    Product.findById(id, callback);
}

module.exports.updateProduct = async function(id, product) {
    return await Product.findOneAndUpdate(id, product);
}