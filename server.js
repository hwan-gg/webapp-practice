require("dotenv").config();
const express = require("express");
const MainRouter = require("./Routers/MainRouter");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");

// Setup Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:4004", credentials: true }));

// passport
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(cookieParser("secret"));
require("./passport-config")(passport);
app.use(passport.initialize());
app.use(passport.session());

// connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};
connectDB();

app.use("/", MainRouter.WebRouter);
// Handle API related requests
app.use("/api", MainRouter.ApiRouter);
// Handle Login related requests
app.use("/auth", MainRouter.LoginRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(4444, () => {
    console.log(`Server running on port 4444 🚨`);
  });
});
