const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/UnauthorizedError401');
const { ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN } = require('../constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError(ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN);
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
