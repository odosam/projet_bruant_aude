const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require("../config.js");


exports.checkJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Vérifie si le jeton est présent dans l'en-tête
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1]; // Récupère le jeton

  try {
    // Vérifie et décode le jeton
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = decoded; // Ajoute les informations décodées au `req.user`
    next(); // Passe au middleware ou contrôleur suivant
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};