const bcrypt = require('bcryptjs');
const User = require('../models/user');
const ConflictError = require('../errors/ConflictError409');
const NotFoundError = require('../errors/NotFoundError404');
const BadRequestError = require('../errors/BadRequestError400');
const {
  ERR_CONFLICT_MSG_SAMEUSER,
  ERR_NOT_FOUND_MSG_USER,
  MSG_USER_UPDATED,
  ERR_BAD_REQUEST_MSG_INCORRECT_DATA,
  ERR_CONFLICT_MSG_SAMEEMAIL,
} = require('../constants');

const createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => {
      res.status(201).send({
        user: {
          name, email,
        },
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        return next(new ConflictError(ERR_CONFLICT_MSG_SAMEUSER));
      }
      next(err);
    });
};

const updateUserProfile = (req, res, next) => {
  const {
    name,
    email,
  } = req.body;
  const id = req.user._id;
  User.findByIdAndUpdate(id, {
    name,
    email,
  }, {
    new: true,
  })
    .orFail(() => next(new NotFoundError(ERR_NOT_FOUND_MSG_USER)))
    .then((user) => {
      res.send({
        message: MSG_USER_UPDATED,
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      }
      if (err.name === 'MongoServerError') {
        return next(new ConflictError(ERR_CONFLICT_MSG_SAMEEMAIL));
      }
      next(err);
    });
};

const getCurrentUser = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .orFail(() => next(new NotFoundError(ERR_NOT_FOUND_MSG_USER)))
    .then((user) => {
      res.send({
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      }
      next(err);
    });
};
module.exports = { createUser, updateUserProfile, getCurrentUser };
