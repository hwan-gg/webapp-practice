const UserController = require("../Controllers/UserController");
const MovieController = require("../Controllers/MovieController");

const express = require("express");

const router = express.Router();

router.get("/Movies", MovieController.getMovies);
router.get("/Users", UserController.getUsers);
router.post("/Users", UserController.addUser);
router.delete("/Users", UserController.deleteUser);

module.exports = router;
