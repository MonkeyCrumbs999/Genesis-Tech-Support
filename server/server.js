const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const Joi = require("joi");
const cors = require("cors");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next();
});

app.use(
  require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "https://thriving-palmier-d79b26.netlify.app", // or specific URIs where requests are allowed from
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.json());

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

app.post("/register", async (req, res) => {
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

app.post(
  "/login",
  (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
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

app.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Successfully Logged Out!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
