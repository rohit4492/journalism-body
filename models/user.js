const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isadmin:{
    type : String,
  }
})

// UserSchema.plugin(passportLocalMongoose, { usernameField : 'googleId' });
module.exports = mongoose.model('User', UserSchema)