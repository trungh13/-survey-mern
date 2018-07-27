const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: '/auth/github/callback',
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ userId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //already have record with given profile ID
          done(null, existingUser);
        } else {
          //don't have record with given profile ID
          new User({
            userId: profile.id,
            provider: 'github',
            name: profile.displayName
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ userId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //already have record with given profile ID
          done(null, existingUser);
        } else {
          //don't have record with given profile ID
          new User({
            userId: profile.id,
            provider: 'google',
            name: profile.displayName
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
