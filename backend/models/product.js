// // models/product.js
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://username:password@localhost:5432/mydatabase');

// const Product = sequelize.define('Product', {
//   ref: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   nom: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   prix: {
//     type: DataTypes.FLOAT,
//     allowNull: false
//   },
//   imageUrl: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   motsCles: {
//     type: DataTypes.ARRAY(DataTypes.STRING),
//     allowNull: true
//   }
// });

// sequelize.sync();  // Crée la table Product si elle n'existe pas
// [
//     {"ref" : "photo1", "nom":"2007_pic","prix":70, "imageUrl": "assets/images/sr1.jpg", "motsCles": ["voiture", "nuit", "automobile"]},
//     {"ref" : "photo3", "nom":" o s_a k a ??//?3","prix":100,  "imageUrl": "assets/images/civic.jpg", "motsCles": ["honda", "voiture", "nuit", "automobile", "dehors"]},
//     {"ref" : "photo2", "nom":"ls custom life","prix": 30 ,  "imageUrl": "assets/images/sr3.jpg", "motsCles": ["mercedes","voiture", "nuit", "garage" , "automobile"]},
//     {"ref" : "photo5", "nom":"2007_pic(1)","prix":70 ,  "imageUrl": "assets/images/sr2.jpg", "motsCles": ["bmw","dehors","voiture", "nuit", "automobile"]},
//     {"ref" : "photo4", "nom":"shinny view","prix" : 150,  "imageUrl": "assets/images/secretMeet.jpg", "motsCles": ["vskf","jante", "interieur"]},
//     {"ref" : "photo7", "nom":"SecM 555","prix":50 ,  "imageUrl": "assets/images/secretMeet2.jpg", "motsCles": ["bmw"]}

//   ]
module.exports = [
    {
        "ref": "photo1",
        "nom": "2007_pic",
        "prix": 70,
        "imageUrl": "../../frontend/assets/images/sr1.jpg",
        "motsCles": ["voiture", "nuit", "automobile"]
    },
    {
        "ref": "photo3",
        "nom": "o s_a k a ??//?3",
        "prix": 100,
        "imageUrl": "../../frontend/assets/images/civic.jpg",
        "motsCles": ["honda", "voiture", "nuit", "automobile", "dehors"]
    },
    {
        "ref": "photo2",
        "nom": "ls custom life",
        "prix": 30,
        "imageUrl": "../../frontend/assets/images/sr3.jpg",
        "motsCles": ["mercedes", "voiture", "nuit", "garage", "automobile"]
    },
    {
        "ref": "photo5",
        "nom": "2007_pic(1)",
        "prix": 70,
        "imageUrl": "../../frontend/assets/images/sr2.jpg",
        "motsCles": ["bmw", "dehors", "voiture", "nuit", "automobile"]
    },
    {
        "ref": "photo4",
        "nom": "shinny view",
        "prix": 150,
        "imageUrl": "../../frontend/assets/images/secretMeet.jpg",
        "motsCles": ["vskf", "jante", "interieur"]
    },
    {
        "ref": "photo7",
        "nom": "SecM 555",
        "prix": 50,
        "imageUrl": "../../frontend/assets/images/secretMeet2.jpg",
        "motsCles": ["bmw"]
    }
];
