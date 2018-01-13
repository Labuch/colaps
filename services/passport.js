const passport = require('passport');
const mongoose = require('mongoose');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            profileFields: ['id'],
            proxy: true

        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({facebookId: profile.id});
            if (existingUser)
            {
                //we already a user with this id
                return done(null, existingUser)
            }
            const user = await new User({facebookId: profile.id}).save();
            done(null, user);

        }

    )
);