const products = require('../models/product');

exports.get = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(products));
}