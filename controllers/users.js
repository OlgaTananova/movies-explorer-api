const bcrypt = require('bcryptjs');
const User = require('../models/user');
const ConflictError = require('../errors/ConflictError409');
const BadRequestError = require('../errors/BadRequestError400');
const NotFoundError = require('../errors/NotFoundError404');
const {
  ERR_CONFLICT_MSG_SAMEUSER,
  ERR_BAD_REQUEST_MSG_INCORRECT_DATA,
  ERR_NOT_FOUND_MSG_USER,
} = require('../constants');

const createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError(ERR_CONFLICT_MSG_SAMEUSER);
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => {
      res.status(201).send({
        data: {
          name, email,
        },
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA));
      } else {
        next(err);
      }
    });
};

const updateUserProfile = (req, res, next) => {
  const {
    name,
    email,
  } = req.body;
  const id = req.user._id;
  if (!name || !email) {
    throw new BadRequestError(ERR_BAD_REQUEST_MSG_INCORRECT_DATA);
  }
  User.findByIdAndUpdate(id, {
    name,
    email,
  }, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => next(err));
};

const getCurrentUser = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(ERR_NOT_FOUND_MSG_USER);
      }
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = { createUser, updateUserProfile, getCurrentUser };
