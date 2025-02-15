// Get all products
module.exports = app => {
  const productsController = require('../controllers/catalogue.controller');

  let router = require('express').Router();

  router.get('/', productsController.get);

  app.use('/api/products', router);
};