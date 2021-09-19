const { v4: uuidv4 } = require("uuid");

const getFormattedUUID = () => uuidv4().replace(/-/g, "");

module.exports = {
  getFormattedUUID,
};
