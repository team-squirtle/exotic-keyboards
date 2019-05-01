const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  // res.send('reached')
});

router.post('/', (req, res) => {
    // res.send('reached me too')
  // userController.createUser(req, res);
  userController.createUser(req, res);
});

module.exports = router;