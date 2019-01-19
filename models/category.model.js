const mongoose = require('mongoose');
const schema = mongoose.Schema;

let CategorySchema = new schema({
    name: {type: String, required: true}
});

let Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getAll = async function(limit){
    return await Category.find().limit(limit);
}

module.exports.addCategory = async function(category){
    return await Category.create(category);
}