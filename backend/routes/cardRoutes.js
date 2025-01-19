// routes/cardRoutes.js

const express = require('express');
const router = express.Router();

const defaultCard = {
  cardholderName: "Default Card",
  last4Digits: "1234",
  cardType: "Visa",
  expMonth: "12",
  expYear: "2025",
  token: "some-unique-token-for-this-card"
};

router.get('/default', (req, res) => {
  res.json(defaultCard);
});

module.exports = router;
