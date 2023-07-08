// Import mongoose and bcryptjs
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

// Before we save a user to the database
UserSchema.pre("save", async function (next) {
  const user = this; // 'this' refers to the user object

  // If the password is modified (or this is a new user)
  if (user.isModified("password")) {
    // Hash the password with bcrypt and replace the plain-text password with the hashed one
    user.password = await bcrypt.hash(user.password, 8);
  }

  // Proceed to the next step (saving the user)
  next();
});

// Create the User model based on the schema and export it
const User = mongoose.model("User", UserSchema);
module.exports = User;
