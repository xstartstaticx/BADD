const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  // step 1 // Logging in / signing up

  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  // step 2 user information

  age: {
    type: Number,
    required: true,
  },
  diseases: {
    type: String,
  },
  allergies: {
    type: String,
  },
  medication: {
    type: String,
  },
  bloodtype: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  height: {
    type: Number,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
