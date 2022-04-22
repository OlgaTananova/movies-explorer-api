const { Joi } = require('celebrate');

const signupValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required()
      .label('Имя пользователя')
      .messages({
        'string.base': '{#label} должно быть строкой 2-30 символов.',
        'string.min': '{#label} должно быть строкой 2-30 символов.',
        'string.max': '{#label} должно быть строкой 2-30 символов.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
        'any.required': 'Необходимо ввести {#label}.',
      }),
    email: Joi.string().required().email().label('Email')
      .messages({
        'string.base': 'Поле должно быть строкой с {#label}.',
        'string.email': 'Некорректный формат {#label}.',
        'any.required': 'Необходимо ввести {#label}.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
      }),
    password: Joi.string().required().label('Пароль')
      .messages({
        'string.base': 'Некорректный формат поля {#label}. Должна быть строка.',
        'any.required': 'Не введен {#label}, необходимо ввести {#label}.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
      }),
  }),
};

const signinValidationSchema = {
  body: Joi.object().keys({
    email: Joi.string().email().label('Email').required()
      .messages({
        'string.base': 'Поле должно быть строкой с {#label}.',
        'string.email': 'Некорректный формат {#label}.',
        'any.required': 'Необходимо ввести {#label}.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
      }),
    password: Joi.string().label('Пароль').required()
      .messages({
        'string.base': 'Некорректный формат поля {#label}. Должна быть строка.',
        'any.required': 'Не введен {#label}, необходимо ввести {#label}.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
      }),
  }),
};

const updateProfileValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .label('Имя пользователя')
      .messages({
        'string.base': 'Некорректное {#label}, должна быть строка длиной 2-30 символа.',
        'string.min': 'Некорректное {#label}, должна быть строка длиной 2-30 символа.',
        'string.max': 'Некорректное {#label}, должна быть строка длиной 2-30 символа.',
        'any.required': 'Требуется ввести {#label}.',
        'string.empty': 'Пустое поле, требуется {#label}.',
      }),
    email: Joi.string().email().label('Email').required()
      .messages({
        'string.base': 'Поле должно быть строкой с {#label}.',
        'string.email': 'Некорректный формат {#label}.',
        'any.required': 'Необходимо ввести {#label}.',
        'string.empty': 'Пустое поле, необходимо ввести {#label}.',
      }),
  }),
};

module.exports = {
  signupValidationSchema,
  signinValidationSchema,
  updateProfileValidationSchema,
};
