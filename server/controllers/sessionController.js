const sessionController = {};
const sessionStorage = {};

// creates a random session id for each user
// stores the session in the server in the sessionStorage object
sessionController.createSession = () => {
  let sessionID = '';
  for (let i = 0; i < 5; i++) {
    sessionID += Math.floor(Math.random() * 10).toString();
  }
  sessionStorage[sessionID] = null;
  return sessionID;
};

// update user's sessionID to include their saved preferences
sessionController.updateSession = (sessionID, preferences, cb) => {
  const parsedObj = JSON.parse(preferences);
  if (sessionStorage[sessionID] == null) {
    sessionStorage[sessionID] = parsedObj;
  }
  console.log(sessionStorage);
  cb();
};

module.exports = sessionController;