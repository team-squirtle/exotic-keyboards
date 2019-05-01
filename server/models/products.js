const pool = require('../bin/postgresNode.js');

const productModel = {};

productModel.returnWoods = (cb) => {
  pool.query('SELECT * FROM wood', cb);
};

productModel.returnStains = (cb) => {
  pool.query('SELECT * FROM stain', cb);
};

module.exports = productModel;