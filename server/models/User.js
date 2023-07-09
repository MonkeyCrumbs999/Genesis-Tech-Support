const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

UserSchema.pre("save", async function (next) {
  try {
    // Only hash the password if it has been modified
    if (this.isModified("password")) {
      const saltRounds = 10;
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);
