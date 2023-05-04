const express = require('express');
const router = express.Router();
const AdminController = require('../Controllers/AdminController');

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.redirect('/Unauth');
}

router.get('/Unauth', (req, res) => {
    res.send({currentUser: req.user, redirect: "/", authenticated: false});
});
router.get('/Success', (req, res) => {
    res.send({currentUser: req.user, redirect: '/', authenticated: true});
});
router.get('/Fail', (req, res) => {
    res.send({currentUser: req.user, redirect: '/Login', authenticated: false});
});
router.get('/Profile/:username', isAuthenticated, (req, res) => {
    if(req.params.username === undefined) res.redirect('/Success');
    AdminController.getAdmin(req, res);
})

module.exports = router;