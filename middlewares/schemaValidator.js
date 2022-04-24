const { Joi } = require('celebrate');
const { joiErrorMessages } = require('../constants');

const signupValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .label('Имя пользователя')
      .messages(joiErrorMessages),
    email: Joi.string().required().email().label('Email')
      .messages(joiErrorMessages),
    password: Joi.string().required().label('Пароль')
      .messages(joiErrorMessages),
  }),
};

const signinValidationSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().label('Email').required()
      .messages(joiErrorMessages),
    password: Joi.string().label('Пароль').required()
      .messages(joiErrorMessages),
  }),
};

const updateProfileValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .label('Имя пользователя')
      .messages(joiErrorMessages),
    email: Joi.string().email().label('Email').required()
      .messages(joiErrorMessages),
  }),
};

const createMovieValidationSchema = {
  body: Joi.object().keys({
    country: Joi.string().required().label('Страна')
      .messages(joiErrorMessages),
    director: Joi.string().required().label('Режиссер')
      .messages(joiErrorMessages),
    duration: Joi.number().required().label('Продолжительность фильма')
      .messages(joiErrorMessages),
    year: Joi.string().required().label('Год производства')
      .messages(joiErrorMessages),
    description: Joi.string().required().label('Описание')
      .messages(joiErrorMessages),
    image: Joi.string().required().uri({ allowRelative: true }).label('Ссылка на изображение.')
      .messages(joiErrorMessages),
    trailerLink: Joi.string().required().uri().label('Ссылка на трейлер')
      .messages(joiErrorMessages),
    thumbnail: Joi.string().required().uri({ allowRelative: true }).label('Ссылка на иконку')
      .messages(joiErrorMessages),
    movieId: Joi.number().integer().required().label('Id фильма')
      .messages(joiErrorMessages),
    nameRU: Joi.string().required().label('Название на русском языке')
      .messages(joiErrorMessages),
    nameEN: Joi.string().required().label('Название на английском языке')
      .messages(joiErrorMessages),
  }),
};

const deleteMovieValidationSchema = {
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required()
      .messages(joiErrorMessages),
  }),
};

module.exports = {
  signupValidationSchema,
  signinValidationSchema,
  updateProfileValidationSchema,
  createMovieValidationSchema,
  deleteMovieValidationSchema,
};
