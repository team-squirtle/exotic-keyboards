const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', (req, res) => {
  orderController.createOrder(req, res)
});

module.exports = router;