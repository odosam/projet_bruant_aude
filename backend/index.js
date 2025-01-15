const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// const utilisateurRoutes = require('./routes/utilisateur.routes'); // Vérifiez le chemin du fichier
// const catalogueRoutes = require('./routes/catalogue.routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// const corsOptions = {
//     origin: "*",
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     headers: 'Content-Type, Authorization',
//     exposedHeaders:'Authorization'
// };


// app.use(cors(corsOptions));
// app.use(express.json());

// app.use(bodyParser.json());
require("./routes/utilisateur.routes")(app);
// app.use('/api/utilisateur', utilisateurRoutes); // Route pour les utilisateurs
// app.use('/api/catalogue', catalogueRoutes);     // Route pour le catalogue

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
