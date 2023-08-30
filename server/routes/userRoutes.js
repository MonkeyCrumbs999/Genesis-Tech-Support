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

router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if email already exists
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).send("Email already exists");
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
        console.error(err);
        return res.status(500).send("Error registering");
      }
      passport.authenticate("local", (err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .send("Error authenticating after registration");
        }
        res
          .status(200)
          .json({ user: { username: user.username, email: user.email } });
      })(req, res);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering");
  }
});

router.post(
  "/login",
  (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    next();
  },
  async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).send("User does not exist");
    }
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    res
      .status(200)
      .json({ user: { username: req.user.username, email: req.user.email } });
  }
);

router.get("/logout", (req, res) => {
  req.logout((error) => {
    if (error) {
      // handle the error condition
      console.log(error);
      res.status(500).send("Server error during logout"); // you can customize your own error message
    } else {
      // If there's no error during logout, clear the session and cookie
      req.session = null;
      res.clearCookie("connect.sid");
      res.status(200).send("Successfully Logged Out!");
    }
  });
});
module.exports = router;
