require('dotenv').config();
const User = require('../Model/User');
const bcrypt = require('bcrypt');

async function addUser(req, res) {
    const user = req.body;
    const pw = await bcrypt.hash(user.password, Number(process.env.USER_SALT));
    console.log(user.name, user.email, pw);
    await User.create(new User({ name: user.name, email: user.email, password: pw })).then((data) => {
        console.log("Added User 🪄");
        res.send(data);
    }).catch((err) => {
        if (err) {
            console.log("Error 🚨");
            res.send(null);
        }
    });
}

async function deleteUser(req, res) {
    console.log(req.body.name);
    const result = await User.deleteOne(req.body);
    if (result.acknowledged) {
        console.log("Deleted User ❌");
        res.send(req.body.name);
    } else {
        console.log("Failed 😓")
        res.send({ name: "" });
    }
};

async function getUsers(req, res) {
    const query = await User.find();
    res.send(query);
};

module.exports = { addUser, deleteUser, getUsers };