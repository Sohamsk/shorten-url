const sessionIdMap = new Map();

function setUser(id, user) {
  sessionIdMap.set(id, user);
}

function getUser(id) {
  return sessionIdMap.get(id);
}


module.exports = {
  setUser,
  getUser,
};
