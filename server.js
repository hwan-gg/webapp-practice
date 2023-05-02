require('dotenv').config();
const express = require('express');
const MainRouter = require('./Routers/MainRouter');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const passport = require('passport');
const session = require('express-session');
const passportConfig = require('./passport-config');

// Setup Express
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// passport
app.use(session({ secret : 'secret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) { console.log(err); }
}
connectDB();


app.use('/', MainRouter.WebRouter);
// Handle User related requests
app.use('/api/Users', MainRouter.UserRouter);

// Handle Admin related requests
// {successRedirect: "/Success",failureRedirect: "/Fail"}
app.post('/auth/Login', (req, res, next) => passport.authenticate('local', (err, user, info) => {
    if(err) return next(err);
    if(!user) res.redirect('/Fail');
    console.log('success');
    return req.logIn(user, () => res.redirect('/Success'));
})(req, res, next));
app.post('/auth/Logout', (req, res) => res.send({authenticated: false}));
app.get('/auth/Enter', (req, res) => res.send({authenteicated: false}));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(4444, () => { console.log(`Server running on port 4444 🚨`); });
})


