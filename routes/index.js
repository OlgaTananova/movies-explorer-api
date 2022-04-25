const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError404');
const { ERR_NOT_FOUND_MSG_ROUTE } = require('../constants');

const routes = (app) => {
  app.use(userRouter);
  app.use(movieRouter);
  app.use(auth, (req, res, next) => {
    next(new NotFoundError(ERR_NOT_FOUND_MSG_ROUTE));
  });
};

module.exports = routes;
