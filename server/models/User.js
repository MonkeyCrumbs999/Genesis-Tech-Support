// User Model
// Import mongoose and bcryptjs
const mongoose = require("mongoose");

// Define the User schema
const UserSchema = new mongoose.Schema({
  // Each user will have a unique username which is required
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // Each user will have a password which is required
  password: {
    type: String,
    required: true,
  },
  // Each user will have a unique email which is required
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the User model based on the schema and export it
const User = mongoose.model("User", UserSchema);
module.exports = User;
