const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: String,
  email: { type: String, unique: true, required: true },
  phone: String,
  address: String,
  zipcode: String,
  city: String,
  state: String,
  country: String,
});

// Hash password before saving to the database
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;

    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
