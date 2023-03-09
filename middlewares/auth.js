const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError401');
const { ERR_UNAUTHORIZED_MSG } = require('../constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnauthorizedError(ERR_UNAUTHORIZED_MSG);
  }
  req.user = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  next();
};

module.exports = auth;
