const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { MSG_TOKEN_SENT, MSG_TOKEN_DELETED } = require('../constants');

const { NODE_ENV, JWT_SECRET } = process.env;

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key', { expiresIn: '7d' });
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 6.048e+8,
        sameSite: 'none',
        secure: true,
      });
      res.send({ message: MSG_TOKEN_SENT });
    })
    .catch((err) => {
      next(err);
    });
};

const logout = (req, res) => {
  res.clearCookie('jwt').send({ message: MSG_TOKEN_DELETED });
};

module.exports = { login, logout };
