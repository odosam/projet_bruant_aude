const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3000;

const corsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers: 'Content-Type, Authorization',
    exposedHeaders:'Authorization'
};


app.use(cors(corsOptions));
app.use(express.json());

// app.use(bodyParser.json());

require("./routes/catalogue.routes")(app);
require("./routes/utilisateur.routes")(app);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
