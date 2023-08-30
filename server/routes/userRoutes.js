const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../auth");
const Joi = require("joi");

// Validation schemas
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[ -~]{3,30}$")).required(),
  firstName: Joi.string().min(1).max(30).required(),
  lastName: Joi.string().min(1).max(30).required(),
  address: Joi.string().min(1).max(100).required(),
  city: Joi.required(),
  state: Joi.string().min(2).max(20).required(),
  zipCode: Joi.string().min(5).max(9).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
});

// Check if email already exists
router.post("/checkEmail", async (req, res) => {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

// Check if username already exists
router.post("/checkUsername", async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

// Register user
router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      phone: req.body.phone,
    });

    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        return res.status(500).send("Error registering");
      }
      passport.authenticate("local")(req, res, () => {
        res.status(200).json({ user: { username: user.username, email: user.email } });
      });
    });
  } catch (error) {
    res.status(500).send("Error registering");
  }
});

// Login
router.post("/login", (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
}, passport.authenticate("local"), (req, res) => {
  res.status(200).json({ user: { username: req.user.username, email: req.user.email } });
});

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out, please try again." });
    }
    res.status(200).send("Successfully Logged Out!");
  });
});


module.exports = router;
