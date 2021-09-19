import { v4 as uuidv4 } from "uuid";

const getFormattedUUID = () => uuidv4().replace(/-/g, "");

module.exports = {
  getFormattedUUID,
};
