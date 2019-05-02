const pool = require('../bin/postgresNode.js');
const orderController = {};

orderController.createOrder = (req, res) => {
  const { email, selected_wood, selected_stain, address_1, address_2, city, state, zip, phone } = req.body;

  pool.query(`INSERT INTO
    orders (
            user_id,
            selected_wood,
            selected_stain,
            address_1, address_2, city, state, zip, phone)
    VALUES (
            (SELECT _id from users WHERE email = '${email}'),
            (SELECT _id from wood WHERE type = '${selected_wood}'),
            (SELECT _id from stain WHERE type = '${selected_stain}'),
            '${address_1}',
            '${address_2}',
            '${city}',
            '${state}',
            '${zip}',
            '${phone}'
           )`, (err, result) => {
    if (err){
      res.send(err);
    } else {
      res.send('order placed!')
    }
  });
};

module.exports = orderController;