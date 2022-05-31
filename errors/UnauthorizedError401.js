const { ERR_UNAUTHORIZED } = require('../constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
