require('dotenv').config();
const express = require('express');
const MainController = require('./Controllers/MainController');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended : false }));
// connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
    } catch ( err ) {
        console.log(err);
    }
}
connectDB();

// Handle User related requests
app.get("/getUsers", MainController.User.getUsers);
app.post("/addUser", MainController.User.addUser);
app.post("/deleteUser", MainController.User.deleteUser);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(4444, () => { console.log( `Server running on port 4444 🚨`); });
})


