const Admin = require('./Model/Admin');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {

  passport.serializeUser((user, cb) => {
    console.log('serialize:', user.username);
    return cb(null, user.username)
  });
  passport.deserializeUser(async (username, cb) => {
    const user = await Admin.findOne({ username: username });
    console.log('deserialize: ', user);
    return cb(null, user);
  });

  passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await Admin.findOne({ username: username });
    if (!user) return done(null, false, { message: "username not found" });
    const success = await bcrypt.compare(password, user.password);
    if (!success) return done(null, false, { message: "invalid password" });
    return done(null, user);
  }));
}