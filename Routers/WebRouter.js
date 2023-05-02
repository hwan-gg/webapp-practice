const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('http://localhost:4004/');
})
router.get('/Success', (req, res) => {
    res.send({redirect: "/", authenticated: true})});
router.get('/Fail', (req, res) => res.send({redirect: "/Login", authenticated: false}));
router.get('/Home', (req, res) => res.redirect("http://localhost:4004/"));
router.get('/Users', (req, res) => res.redirect("http://localhost:4004/Users"));

module.exports = router;