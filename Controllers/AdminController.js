const Admin = require('../Model/Admin');

async function getAdmin( username ) {
    const admin = await Admin.findOne({username : username});
    return admin;
}

module.exports = { getAdmin };