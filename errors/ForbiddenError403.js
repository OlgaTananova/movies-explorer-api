const { ERR_FORBIDDEN } = require('../constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_FORBIDDEN;
  }
}

module.exports = ForbiddenError;
