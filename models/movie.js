const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  descriptionLink: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

module.exports = mongoose.model('movie', movieSchema);
