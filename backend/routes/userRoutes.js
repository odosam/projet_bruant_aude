// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ username, password: hashedPassword });
//     res.json(newUser);
//   });
  
//   app.put('/update', verifyToken, async (req, res) => {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const updatedUser = await User.update({ username, password: hashedPassword }, { where: { id: req.userId } });
//     res.json(updatedUser);
//   });

const {authenticate} = require('../middleware/authMiddleware');

module.exports = app => { 
    
    const userController = require('../controllers/userController');

    let router = require('express').Router();

    router.post('/register', userController.registerUser);
    router.post('/login', userController.loginUser);
    router.get('/user', authenticate, userController.getUser);
    router.put('/user', authenticate, userController.updateUser);

    app.use('/api/users', router);
}