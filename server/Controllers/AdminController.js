const Admin = require('../Model/Admin');

async function getAdmin( req, res ) {
    const username = req.user;
    const admin = await Admin.findOne({username : username});
    res.send({username: username, userProfile: admin.profile});
}


module.exports = { getAdmin };