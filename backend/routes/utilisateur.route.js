const { checkJwt }  = require('../middleware/authMiddleware.js');

module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controller.js");
    let router = require("express").Router();
  
    // login utilisateur
    router.post('/login', utilisateur.login);
    router.get('/user', checkJwt , utilisateur.get);
    router.post('/register', utilisateur.register);
  
    app.use('/api/users', router);
  };