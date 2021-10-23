
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/user')
const findOrCreate = require('mongoose-findorcreate');

module.exports = function (passport) {

    // passport.use(User.createStrategy());

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
    
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });

  passport.use(
    new GoogleStrategy(
      {
        clientID: "309410118944-mci5i430hmmt32fdcho3aaj0sristshl.apps.googleusercontent.com",
        clientSecret: "47qlVZq0VxJWDUxYYVI2I6op",
        callbackURL: "https://journalismbody-iitbbs.herokuapp.com/auth/google/callback",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
      },

        function(accessToken, refreshToken, profile, done) {
    // console.log(profile);

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    User.findOne({ googleId: profile.id }, function (err, user) {
        if (err)
              return done(err);
          else if (user) {
              console.log('user');
              return done(null, user);
          } 
          else {
            console.log('ELSE');
            const googleId = profile.id;
            const displayName = profile.displayName;
            const firstName = profile.name.givenName;
            const lastName = profile.name.familyName;
            const image = profile.photos[0].value;

            const user = new User ({
                googleId : googleId,
                displayName : displayName,
                firstName : firstName,
                lastName : lastName,
                image : image
            })

            
    
            user.save()
            .then(result =>{
                console.log(user);
            res.redirect('/');
            })
            .catch(err=>{
            console.log(err);
        });
            //   User.insert({
            //     "googleId": profile.id,
            //     "displayName": profile.displayName,
            //     "firstName": profile.name.givenName,
            //     "lastName": profile.name.familyName,
            //     "image": profile.photos[0].value,
            //   "googleid" : profile.id,
            //   "token" : token,
            //   "name"  : profile.displayName,
            //   "email" : profile.emails[0].value,
            //   "photo" : profile.photos[0].value
            //   })
            //   console.log(profile.emails[0].value);
              return done(null, user);
            }
    //   return cb(err, user);
    })
}))

    //   async (accessToken, refreshToken, profile, done) => {
    //     const newUser = {
    //       googleId: profile.id,
    //       displayName: profile.displayName,
    //       firstName: profile.name.givenName,
    //       lastName: profile.name.familyName,
    //       image: profile.photos[0].value,
    //     }

    //     try {
    //       let user = await User.findOne({ googleId: profile.id })

    //       if (user) {
    //         done(null, user)
    //       } else {
    //         user = await User.create(newUser)
    //         done(null, user)
    //       }
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   }
    // )
  

//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   })

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => done(err, user))
//   })
}
