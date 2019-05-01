const pool = require('../bin/postgresNode.js');

const userController = {};
userController.createUser = (req, res, next) => {
  const {email, password} = req.body;
  if (email && password) {
    const queryString = `INSERT INTO users (email, password) VALUES ('${ email }', crypt('${ password }', gen_salt('bf', 8)))`;
    pool.query(queryString, (err, result) => {
      if (err) next(err);
      console.log('created user');
      res.send('user created');
    });
  }
};

module.exports = userController;