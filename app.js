require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { celebrateErrorHandler, generalErrorHandler } = require('./middlewares/errorHandler');
const { ERR_GENERAL_MSG, ERR_NOT_FOUND_MSG_ROUTE } = require('./constants');
const NotFoundError = require('./errors/NotFoundError404');
const UserRouter = require('./routes/users');

const app = express();
const { PORT = 3000, MONGO_URI } = process.env;

async function start() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, // Приложение не запускается, если оставить эти опции активными
    // useCreateIndex: true,
    // useFindAndModify: false,
  });
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
}
start()
  .then(() => {
    app.use(cors({
      origin: ['http://localhost:3001',
        'http://localhost:3000'],
    }));
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(requestLogger);
    // роуты
    app.use(UserRouter);
    app.use((req, res, next) => {
      next(new NotFoundError(ERR_NOT_FOUND_MSG_ROUTE)); // защитить роут авторизацией
    });
    app.use(errorLogger);
    app.use(celebrateErrorHandler);
    app.use(generalErrorHandler);
  })
  .catch(() => {
    console.log(ERR_GENERAL_MSG); // Вывод в модальное окно? res.send
    process.exit();
  });
