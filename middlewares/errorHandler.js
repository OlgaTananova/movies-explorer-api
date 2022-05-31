const { isCelebrateError } = require('celebrate');
const { ERR_BAD_REQUEST, ERR_SERVER, ERR_SERVER_MSG } = require('../constants');

const celebrateErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    const errorBody = err.details.get('body') || err.details.get('params');
    const { details: [errorDetails] } = errorBody;
    res.status(ERR_BAD_REQUEST).send({ message: errorDetails.message });
  } else {
    next(err);
  }
};

const generalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || ERR_SERVER;
  const message = statusCode === ERR_SERVER ? ERR_SERVER_MSG : err.message;
  res.status(statusCode).send({ message });
  next();
};

module.exports = {
  celebrateErrorHandler,
  generalErrorHandler,
};
