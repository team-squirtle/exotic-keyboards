// Route is named in app.js as '/api/sessions'
const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// adds a session cookie
// GET /api/sessions/
router.get('/', (req, res) => {
  // check if the request already has a cookie
  // if they have a cookie, ignore this
  if (!req.cookies.sessionID) {
    const sessionID = sessionController.createSession();
    res.cookie('sessionID', sessionID);
    res.status(200);
    res.end();
  }
});

// PUT /api/sessions/
// user preferences are added into request header's cookies
// TODO set wood and stain selections inside cookie in client
router.put('/', (req, res) => {
  // check if cookie exists
  // if it does, invoke cookie controller and update our session storage
  function wasSessionIDUpdated () {
    res.send('preferences saved');
  }
  if (req.cookies.sessionID) {
    sessionController.updateSession(req.cookies.sessionID, req.cookies.preferences, wasSessionIDUpdated);
  }
});

module.exports = router;