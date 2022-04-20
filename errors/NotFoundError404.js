const { ERR_NOT_FOUND } = require('../constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_NOT_FOUND;
  }
}

module.exports = NotFoundError;
