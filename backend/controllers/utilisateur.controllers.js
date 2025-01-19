const { v4: uuidv4 } = require ("uuid");
const { ACCESS_TOKEN_SECRET }  = require ("../config.js");

const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
  }


  const userList = [
    {
      nom: "Martin",
      prenom: "Jean",
      login: "martjean",
      email: "martin.jean@gmail.com",
      password: "toto",
      id: uuidv4()
  }
];

// Connexion d'un utilisateur
exports.login = (req, res) => {
  const { login, password } = req.body;

  // Validation des entrées
  const pattern = /^[A-Za-z0-9]{1,20}$/;
  if (!pattern.test(login) || !pattern.test(password)) {
      return res.status(400).json({ message: "Login ou mot de passe invalide." });
  }

  // Recherche de l'utilisateur
  const authUser = userList.find((user) => user.login === login && user.password === password);
  if (!authUser) {
      return res.status(401).json({ message: "Utilisateur ou mot de passe incorrect." });
  }

  // Génération du token JWT
  const user = {
      id: authUser.id,
      name: authUser.nom,
      mail: authUser.email
  };
  const accessToken = generateAccessToken(user);

  // Réponse
  res.setHeader("Authorization", `Bearer ${accessToken}`);
  res.status(200).json({ user: authUser, token: accessToken });
};

// Ajouter un utilisateur
exports.addUser = (req, res) => {
  const { login, password, nom, prenom, mail } = req.body;

  // Validation des entrées
  const pattern = /^[A-Za-z0-9]{1,20}$/;
  if (!pattern.test(login) || !pattern.test(password)) {
      return res.status(400).json({ message: "Login ou mot de passe invalide." });
  }

  // Vérification de l'existence de l'utilisateur
  const existingUser = userList.find((user) => user.login === login);
  if (existingUser) {
      return res.status(409).json({ message: "Ce login est déjà utilisé." });
  }

  // Ajout de l'utilisateur
  const newUser = {
      id: uuidv4(),
      nom,
      prenom,
      login,
      email: mail,
      password
  };
  userList.push(newUser);

  // Génération du token JWT
  const accessToken = generateAccessToken({ id: newUser.id, name: newUser.nom, mail: newUser.email });

  // Réponse
  res.setHeader("Authorization", `Bearer ${accessToken}`);
  res.status(201).json({ user: newUser, token: accessToken });
};

// Mettre à jour un utilisateur
exports.updateUser = (req, res) => {
  const { id, login, password, nom, prenom, mail } = req.body;

  // Validation des entrées
  const pattern = /^[A-Za-z0-9]{1,20}$/;
  if (!pattern.test(login) || !pattern.test(password)) {
      return res.status(400).json({ message: "Login ou mot de passe invalide." });
  }

  // Recherche de l'utilisateur
  const userIndex = userList.findIndex((user) => user.id === id && user.login === login);
  if (userIndex === -1) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
  }

  // Mise à jour de l'utilisateur
  userList[userIndex] = { id, login, password, nom, prenom, email: mail };

  // Réponse
  res.status(200).json({ message: "Utilisateur mis à jour avec succès.", user: userList[userIndex] });
};

// Récupérer un utilisateur
exports.getUser = (req, res) => {
  const { id } = req.query;

  // Recherche de l'utilisateur
  const authUser = userList.find((user) => user.id === id);
  if (!authUser) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
  }

  // Réponse
  res.status(200).json(authUser);
};