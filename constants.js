const ERR_BAD_REQUEST = 400;
const ERR_UNAUTHORIZED = 401;
const ERR_FORBIDDEN = 403;
const ERR_NOT_FOUND = 404;
const ERR_CONFLICT = 409;
const ERR_SERVER = 500;
const ERR_SERVER_MSG = 'Server error.';
const ERR_GENERAL_MSG = 'Error. Something went wrong.';
const ERR_NOT_FOUND_MSG_ROUTE = 'The route was not found.';
const ERR_NOT_FOUND_MSG_MOVIE = 'The movie was not found.';
const ERR_NOT_FOUND_MSG_USER = 'Unable to find user. Please, authorize.';
const ERR_NOT_FOUND_MSG_MOVIES = 'You dont have any saved movies.';
const ERR_CONFLICT_MSG_SAMEUSER = 'The user with this email already exists.';
const ERR_CONFLICT_MSG_SAMEMOVIE = 'This film is already in your list of saved movies.';
const ERR_BAD_REQUEST_MSG_INCORRECT_DATA = 'Incorrect data.';
const ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN = 'Incorrect email or password.';
const ERR_UNAUTHORIZED_MSG = 'Please, authorize.';
const ERR_FORBIDDEN_MSG_MOVIE = 'Its not your movie. YOu cant delete it.';
const MSG_TOKEN_SENT = 'Token was sent to cookie.';
const MSG_TOKEN_DELETED = 'Token was deleted from cookies.';
const MSG_MOVIE_SAVED = 'The movie was saved.';
const MSG_MOVIE_DELETED = 'The movie was deleted from your list of saved movies.';
const MSG_USER_UPDATED = 'User profile was updated.';
const ERR_CONFLICT_MSG_SAMEEMAIL = 'The user with this email already exists.';

const joiErrorMessages = {
  'string.base': '{#label} must be a string.',
  'string.empty': '{#label} is empty, please, type {#label}.',
  'any.required': 'The field {#label} is required.',
  'string.email': 'The field {#label} must be a valid email address.',
  'string.min': 'The field {#label} must be a string of at least {#limit} characters.',
  'string.max': 'The field {#label} must be a string of at most {#limit} characters.',
  'number.base': 'The field {#label} must be a number.',
  'string.length': 'The field {#label} must be a string of exactly {#limit} characters.',
  'string.hex': 'The field {#label} must be a valid string of 24 symbols.',
  'string.pattern.base': 'Incorrect format of {#label}. Please, check it and try again.',
};

module.exports = {
  ERR_NOT_FOUND,
  ERR_BAD_REQUEST,
  ERR_SERVER,
  ERR_CONFLICT,
  ERR_UNAUTHORIZED,
  ERR_FORBIDDEN,
  ERR_SERVER_MSG,
  ERR_GENERAL_MSG,
  ERR_NOT_FOUND_MSG_ROUTE,
  ERR_CONFLICT_MSG_SAMEUSER,
  ERR_BAD_REQUEST_MSG_INCORRECT_DATA,
  ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN,
  ERR_UNAUTHORIZED_MSG,
  ERR_NOT_FOUND_MSG_USER,
  ERR_CONFLICT_MSG_SAMEMOVIE,
  ERR_FORBIDDEN_MSG_MOVIE,
  ERR_NOT_FOUND_MSG_MOVIE,
  ERR_NOT_FOUND_MSG_MOVIES,
  joiErrorMessages,
  MSG_TOKEN_SENT,
  MSG_TOKEN_DELETED,
  MSG_MOVIE_SAVED,
  MSG_MOVIE_DELETED,
  MSG_USER_UPDATED,
  ERR_CONFLICT_MSG_SAMEEMAIL,
};
