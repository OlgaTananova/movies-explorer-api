const { ERR_CONFLICT } = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERR_CONFLICT;
  }
}

module.exports = ConflictError;
