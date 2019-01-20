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

module.exports = router;