const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username :  { 
        type : String,
        required : true
    },
    password :  { 
        type : String,
        required : true
    },
    profile : {
        type : Object,
        object : {
            username : String,
            age : Number
        }
    }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;