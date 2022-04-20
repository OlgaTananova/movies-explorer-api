const ERR_BAD_REQUEST = 400;
const ERR_UNAUTHORIZED = 401;
const ERR_FORBIDDEN = 403;
const ERR_NOT_FOUND = 404;
const ERR_CONFLICT = 409;
const ERR_SERVER = 500;
const ERR_SERVER_MSG = 'На сервере произошла ошибка';
const ERR_GENERAL_MSG = 'Ошибка. Что-то пошло не так.';
const ERR_NOT_FOUND_MSG_ROUTE = 'Маршрут не найден.';

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
};
