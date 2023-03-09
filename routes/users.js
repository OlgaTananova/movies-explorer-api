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

router.post('/signup', celebrate(signupValidationSchema), createUser);
router.post('/signin', celebrate(signinValidationSchema), login);
router.post('/signout', auth, logout);
router.get('/users/me', auth, getCurrentUser);
router.patch('/users/me', auth, celebrate(updateProfileValidationSchema), updateUserProfile);

module.exports = router;
