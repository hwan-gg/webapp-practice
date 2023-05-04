const Admin = require('../Model/Admin');

async function getAdmin( req, res ) {
    const username = req.params.username;
    const admin = await Admin.findOne({username : username});
    res.send({username: username, userProfile: admin.profile});
}

module.exports = { getAdmin };