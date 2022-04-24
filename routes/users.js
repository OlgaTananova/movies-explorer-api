const { Router } = require('express');
const { celebrate } = require('celebrate');
const { createUser, updateUserProfile, getCurrentUser } = require('../controllers/users');
const { login, logout } = require('../controllers/login');
const {
  signupValidationSchema,
  signinValidationSchema,
  updateProfileValidationSchema,
} = require('../middlewares/schemaValidator');
const auth = require('../middlewares/auth');

const router = Router();
// signup
router.post('/signup', celebrate(signupValidationSchema), createUser);
// signin
router.post('/signin', celebrate(signinValidationSchema), login);

router.post('/signout', auth, logout);

// возвращает информацию о пользователе (email и имя)
// GET /users/me
router.get('/users/me', auth, getCurrentUser);

// обновляет информацию о пользователе (email и имя)
// PATCH /users/me
router.patch('/users/me', auth, celebrate(updateProfileValidationSchema), updateUserProfile);

// возвращает все сохранённые текущим  пользователем фильмы
// GET /movies

module.exports = router;
