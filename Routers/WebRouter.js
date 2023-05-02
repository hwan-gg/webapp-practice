const express = require('express');
const router = express.Router();

router.get('/Unauth', (req, res) => {
    res.send({redirect: "/", authenticated: false});
});
router.get('/Success', (req, res) => {
    res.send({redirect: '/', authenticated: true});
});
router.get('/Fail', (req, res) => {
    res.send({redirect: '/Login', authenticated: false});
});

module.exports = router;