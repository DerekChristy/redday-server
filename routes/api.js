const express = require('express');
const router = express.Router();
const csc = require('country-state-city');

router.get('/cities', (req, res) => {
  res.status(200).json(csc.default.getAllCities());
});

module.exports = router;
