const { Joi } = require('celebrate');
const validator = require('validator');
const { joiErrorMessages } = require('../constants');

function checkURL(value, helpers) {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.message('The field must be a valid URL.');
}

const signupValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .label('Username')
      .messages(joiErrorMessages),
    email: Joi.string().required().email().label('Email')
      .messages(joiErrorMessages),
    password: Joi.string().required().label('Password')
      .messages(joiErrorMessages),
  }),
};

const signinValidationSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().label('Email').required()
      .messages(joiErrorMessages),
    password: Joi.string().label('Password').required()
      .messages(joiErrorMessages),
  }),
};

const updateProfileValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .label('Username')
      .messages(joiErrorMessages),
    email: Joi.string().pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).label('Email').required()
      .messages(joiErrorMessages),
  }),
};

const createMovieValidationSchema = {
  body: Joi.object().keys({
    rating: Joi.number().required().label('Rating')
      .messages(joiErrorMessages),
    year: Joi.string().required().label('Year')
      .messages(joiErrorMessages),
    overview: Joi.string().required().label('Overview')
      .messages(joiErrorMessages),
    image: Joi.string().required().custom(checkURL).label('Link to image')
      .messages(joiErrorMessages),
    descriptionLink: Joi.string().required().custom(checkURL).label('Link to description on TMDB')
      .messages(joiErrorMessages),
    id: Joi.number().integer().required().label('ID of movie on TMDB')
      .messages(joiErrorMessages),
    title: Joi.string().required().label('Title of movie')
      .messages(joiErrorMessages),
  }),
};

const deleteMovieValidationSchema = {
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).label('ID of movie')
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
