const UserController = require('../Controllers/UserController');

const express = require('express');

const router = express.Router();

router.get('/', UserController.getUsers);
router.post('/', UserController.addUser);
router.delete('/', UserController.deleteUser);

module.exports = router;