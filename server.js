require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());

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

app.get("/people", (req, res) => {
    console.log("sent");
    res.send([{   
        name : "Joe",
        age : 15,
        email : "jooe15@hotmail.com"
    },
    {
        name : "Catrina",
        age : 16,
        email : "catt@gmail.com"
    },
    {
        name : "Hugh",
        age : 12,
        email : "hugeh@gmail.com"
    },
    {
        name : "Emma",
        age : 20,
        email : "em_ma@yahoo.com"
    }])
});


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(4444, () => { console.log( `Server running on port 4444 🚨`); });
})


