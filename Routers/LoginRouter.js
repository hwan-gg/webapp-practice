const express = require('express');
const router = express.Router();
const passport = require('passport');

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.redirect('/Unauth');
}

router.post('/Login', passport.authenticate('local', { successRedirect: "/Success", failureRedirect: "/Fail" }));
router.post('/Logout', (req, res) => req.logout(() => res.redirect('/Fail')));
router.get('/Enter', isAuthenticated, (req, res) => res.redirect('/Success'));

module.exports = router;