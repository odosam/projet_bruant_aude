const { authenticate }  = require('../middleware/authMiddleware.js');

module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controller.js");
  
    var router = require("express").Router();
  

    // login utilisateur
    router.post('/login', utilisateur.loginUser);
    router.get('/user', authenticate , utilisateur.getUser);
    router.post('/register', utilisateur.registerUser);
  
    app.use('/api/users', router);
  };