const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  email: { type: String, unique: true, required: true },
  password: { type: String },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
