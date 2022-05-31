const { ERR_SERVER } = require('../constants');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_SERVER;
  }
}

module.exports = ServerError;
