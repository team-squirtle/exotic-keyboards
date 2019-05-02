const pool = require('../bin/postgresNode.js');

const userController = {};
userController.createUser = (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const queryString = `INSERT INTO users (email, password) VALUES ('${ email }', crypt('${ password }', gen_salt('bf', 8)))`;
    pool.query(queryString, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        console.log('created user');
        res.send('user created');
      }
    });
  }
};

userController.userLogin = (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  const queryString = `SELECT * FROM users WHERE email = '${ email }' AND password = crypt('${ password }', password)`;
  // const queryString = `SELECT * FROM users WHERE email = '${email}'`;
  pool.query(queryString, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.rows[0].email);
    }
  });
};


module.exports = userController;