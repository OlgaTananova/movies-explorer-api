require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { celebrateErrorHandler, generalErrorHandler } = require('./middlewares/errorHandler');
const { ERR_GENERAL_MSG } = require('./constants');
const router = require('./routes/index');
const limiter = require('./middlewares/limiter');

const app = express();
const { PORT = 3000, MONGO_URI } = process.env;

async function start() {
  await mongoose.connect(MONGO_URI || 'mongodb://localhost:27017/moviesdb_dev', {
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
        'http://localhost:3000',
        'http://movie-explorerbyolga.nomoredomains.work',
        'https://movie-explorerbyolga.nomoredomains.work',
      ],
      credentials: true,
    }));
    app.use(helmet());
    app.use(requestLogger);
    app.use(limiter);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    router(app);
    app.use(errorLogger);
    app.use(celebrateErrorHandler);
    app.use(generalErrorHandler);
  })
  .catch(() => {
    console.log(ERR_GENERAL_MSG);
    process.exit();
  });
