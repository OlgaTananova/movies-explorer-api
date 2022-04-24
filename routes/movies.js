const { Router } = require('express');
const { celebrate } = require('celebrate');
const auth = require('../middlewares/auth');
const { createMovie, deleteMovie, getSavedMovies } = require('../controllers/movies');
const { createMovieValidationSchema, deleteMovieValidationSchema } = require('../middlewares/schemaValidator');

const router = Router();

router.get('/movies', auth, getSavedMovies);
router.post('/movies', auth, celebrate(createMovieValidationSchema), createMovie);
router.delete('/movies/:id', auth, celebrate(deleteMovieValidationSchema), deleteMovie);

module.exports = router;
