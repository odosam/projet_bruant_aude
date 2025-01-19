// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ where: { username } });
//   if (!user) return res.status(400).json({ message: 'Utilisateur non trouvé' });

//   const isValidPassword = await bcrypt.compare(password, user.password);
//   if (!isValidPassword) return res.status(400).json({ message: 'Mot de passe incorrect' });

//   const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
//   res.json({ token });
// });
