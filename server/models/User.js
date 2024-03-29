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
  },
  // step 2 user information

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    //required: true,
  },
  medicalConditions: {
    type: String,
  },
  allergies: {
    type: String,
  },
  medications: {
    type: String,
  },
  bloodType: {
    type: String,
    //required: true,
  },
  weight: {
    type: Number,
    //require: true,
  },
  height: {
    type: Number,
    //required: true,
  },
  languages: {
    type: [],
    //required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
