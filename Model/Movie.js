const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  awards: {
    nominations: { type: Number },
    text: { type: String },
    wins: { type: Number },
  },
  cast: { type: Array },
  countries: { type: Array },
  directors: { type: Array },
  fullplot: { type: String },
  genres: { type: Array },
  imdb: {
    id: { type: Number },
    rating: { type: Number },
    votes: { type: Number },
  },
  languages: { type: Array },
  lastupdated: { type: String },
  metacritic: { type: Number },
  num_mflix_comments: { type: Number },
  plot: { type: String },
  posted: { type: String },
  rated: { type: String },
  released: { type: Date },
  runtime: { type: Number },
  title: {
    type: String,
    required: true,
  },
  tomatoes: {
    boxOffice: { type: String },
    consensus: { type: String },
    critic: {
      meter: { type: Number },
      numReviews: { type: Number },
      rating: { type: Number },
    },
    dvd: { type: Date },
    fresh: { type: Number },
    lastupdated: { type: Date },
    production: { type: String },
    rotten: { type: Number },
    viewer: {
      meter: { type: Number },
      numReviews: { type: Number },
      rating: { type: Number },
    },
    website: { type: String },
  },
  type: { type: String },
  writers: { type: Array },
  year: { type: Number },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
