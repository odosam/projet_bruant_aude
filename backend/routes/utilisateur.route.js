// const {authenticate} = require('../middleware/authMiddleware');

// module.exports = app => { 
    
//     const userController = require('../controllers/utilisateur.controller');

//     let router = require('express').Router();

//     router.post('/register', userController.registerUser);
//     router.post('/login', userController.loginUser);
//     router.get('/user', authenticate, userController.getUser);
//     router.put('/user', authenticate, userController.updateUser);

//     app.use('/api/users', router);
// }
const { authenticate }  = require('../middleware/authMiddleware.js');

module.exports = app => {
    const utilisateur = require("../controllers/utilisateur.controllers.js");
  
    var router = require("express").Router();
  

    // login utilisateur
    router.post("/login", utilisateur.login);
    router.get("/user", authenticate , utilisateur.getUser);
  
    app.use('/api/utilisateur', router);
  };