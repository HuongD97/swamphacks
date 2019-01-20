var express = require('express');
var router = express.Router();
const Category = require('../models/category.model');

router.get('/all', async function(req, res){
    let categories = await Category.getAll();
    res.json(categories);
});

router.post('/add', async function(req, res){
    let response = await Category.addCategory(req.body);
    res.json(response);
});

module.exports = router