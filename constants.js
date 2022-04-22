const ERR_BAD_REQUEST = 400;
const ERR_UNAUTHORIZED = 401;
const ERR_FORBIDDEN = 403;
const ERR_NOT_FOUND = 404;
const ERR_CONFLICT = 409;
const ERR_SERVER = 500;
const ERR_SERVER_MSG = 'На сервере произошла ошибка';
const ERR_GENERAL_MSG = 'Ошибка. Что-то пошло не так.';
const ERR_NOT_FOUND_MSG_ROUTE = 'Маршрут не найден.';
const ERR_CONFLICT_MSG_SAMEUSER = 'Такой пользователь уже существует.';
const ERR_BAD_REQUEST_MSG_INCORRECT_DATA = 'Переданы некорректные данные';
const ERR_BAD_REQUEST_MSG_INCORRECT_LOGIN = 'Неправильная почта или пароль.';
const ERR_UNAUTHORIZED_MSG = 'Необходима авторизация.';
const ERR_NOT_FOUND_MSG_USER = 'Невозможно отобразить информацию о пользователе, возможно, нужна авторизация.';

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
};
