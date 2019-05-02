const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/', (req, res) => {
  userController.createUser(req, res);
});

router.post('/login', (req, res) => {
  userController.userLogin(req, res);
});

module.exports = router;