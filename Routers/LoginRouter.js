const express = require('express');

const router = express.Router();

router.post('/Login', (req, res) => passport.authenticate('local', {successRedirect: '/', failureRedirect: '/Login'}));
router.post('/Logout', (req, res) => res.send({authenticated: false}));

module.exports = router;