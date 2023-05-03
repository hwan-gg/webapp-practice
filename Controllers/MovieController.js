require("dotenv").config();
const Movie = require("../Model/Movie");

async function getMovies(req, res) {
  const movies = await Movie.aggregate([
    {
      $match: {
        poster: { $exists: true },
        "directors.1": { $exists: true },
        title: { $exists: true },
        year: { $exists: true },
      },
    },
    {
      $group: {
        _id: { title: "$title", director: "$directors.1" },
        poster: { $first: "$poster" },
        year: { $first: "$year" },
      },
    },
    { $sort: { year: -1 } },
  ]);
  res.send(movies);
}

module.exports = { getMovies };
