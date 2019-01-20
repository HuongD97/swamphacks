const mongoose = require('mongoose');
const schema = mongoose.Schema;

let OrderSchema = new schema({
    product_requests: [Product],
    requester_id: {type: String, required: true}
});

let Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getAll = async function(limit) {
    return await Order.find().limit(limit);
}

module.exports.getByRequesterId = async function(id) {
    return await Order.find({requester_id: id});
}

