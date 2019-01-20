var express = require('express');
var router = express.Router();
const Product = require('../models/product.model');

router.get('/getAllAvailable', async function(req, res){
    var availableProducts = await Product.getAllAvailable();
    res.status(200).json(availableProducts);
});

router.get('/getByCategory', async function(req, res){
    var availableProducts = await Product.getByCategory(req.body.category_id, req.limit);
    res.status(200).json(availableProducts);
});

router.post('/add', async function(req, res){
    let product = req.body;
    //TODO: validation
    await Product.addProduct(product);
    res.status(200).json(product);
});

router.post('/update', async function(req, res){
    let product = req.body;
    let query = await Product.updateProduct(product._id, product);
    res.status(200).json(query);
});

router.post('/remove', async function(req, res){
    let id = req.body._id;
    let removedItem = await Product.removeProduct(id);
    res.status(200).json(query);
});

module.exports = router;