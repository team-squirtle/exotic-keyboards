const pool = require('../bin/postgresNode.js');

const orderController = {};

orderController.createOrder = (req, res) => {
  const orderInfo = req.body;

};

module.exports = orderController;