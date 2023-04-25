const User = require('../Model/User');

async function addUser(req, res) {
    const user = req.body;
    await User.create(new User({ name : user.name, age : user.age, email : user.email })).then((data) => {
        console.log("Added User 🪄");
        res.send(data);
    }).catch( (err) => {
        if( err ) {
            console.log("Error 🚨");
            res.send(null);
        }
    });
}

async function deleteUser(req, res) {
    const result = await User.deleteOne(req.body);
    if( result.acknowledged ) {
        console.log("Deleted User ❌");
        res.send(req.body);
    } else {
        console.log("Failed 😓")
        res.send({name : ""});
    }
};


async function getUsers(req, res) {
    console.log("request received");
    const query = await User.find();
    res.send(query);
};

module.exports = { addUser, deleteUser, getUsers };