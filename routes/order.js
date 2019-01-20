var express = require('express');
var router = express.Router();
const Order = require('../models/order.model');

router.get('/getAll', async function(req, res){
    var orders = await Order.getAll();
    res.json(orders);
});

router.get('/getByRequesterId', async function(req, res){
    var orders = await Order.getByRequesterId(req.body.id);
    res.json(orders);
});

router.post('/create', async function(req, res){
    let arrayOfOrders = req.body.product_requests;
    let requester_id = req.body.requester_id;

    await Order.createOrder(arrayOfOrders, requester_id);
    res.status(200).send("Order accepted");
});

module.exports = router;