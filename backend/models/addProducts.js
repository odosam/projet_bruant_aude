// // seedProducts.js
// const { Product } = require('./models/product');

// const products = [
//   { ref: 'photo1', nom: 'Style ruthless', prix: 50, imageUrl: 'assets/images/sr1.jpg', motsCles: ['voiture', 'nuit', 'automobile'] },
//   { ref: 'photo2', nom: 'Style ruthless 2', prix: 30, imageUrl: 'assets/images/sr3.jpg', motsCles: ['mercedes', 'voiture', 'nuit', 'garage', 'automobile'] },
//   { ref: 'photo3', nom: 'Civic night', prix: 50, imageUrl: 'assets/images/civic.jpg', motsCles: ['honda', 'voiture', 'nuit', 'automobile', 'dehors'] },
//   { ref: 'photo4', nom: 'Equip S1', prix: 100, imageUrl: 'assets/images/equipS1.jpg', motsCles: ['Equip', 'jante', 'interieur'] },
//   { ref: 'photo5', nom: 'Style ruthless 3', prix: 50, imageUrl: 'assets/images/sr2.jpg', motsCles: ['bmw', 'dehors', 'voiture', 'nuit', 'automobile'] }
// ];

// const seedProducts = async () => {
//   try {
//     await Product.bulkCreate(products);  // Insère les produits en masse
//     console.log('Produits insérés avec succès');
//   } catch (error) {
//     console.error('Erreur lors de l\'insertion des produits:', error);
//   }
// };

// seedProducts();
