const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../auth");
const Joi = require("joi");

// Validation schemas
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[ -~]{3,30}$")).required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().min(1).max(30).required(),
  lastName: Joi.string().min(1).max(30).required(),
  address: Joi.string().min(1).max(100).required(),
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

  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      phone: req.body.phone,
      zipCode: req.body.zipCode,
    });

    User.register(newUser, req.body.password, (err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error registering");
      }
      passport.authenticate("local")(req, res, () => {
        res
          .status(200)
          .json({ user: { username: user.username, email: user.email } });
      });
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
  req.logout();
  res.status(200).send("Successfully Logged Out!");
});

module.exports = router;
