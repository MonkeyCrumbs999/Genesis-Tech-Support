// Import the necessary packages
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const rateLimit = require("express-rate-limit"); // Import rate limit package
const { body, validationResult } = require("express-validator"); // Import express-validator for input validation

// Import the User model
const User = require("../models/User");

// Create a rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// The register route (POST request to /users/register)
router.post(
  "/register",
  [
    body("username").trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
  ],
  limiter,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract the username, email, and password from the request body
    const { username, email, password } = req.body;

    // Check for existing user
    User.findOne({ username: username }).then((user) => {
      if (user) return res.status(400).json({ msg: "User already exists" });

      // Create a new user
      let newUser = new User({
        username: username,
        email: email,
        password: password,
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.send("User added");
            })
            .catch((err) => {
              res.send("Error: " + err);
            });
        });
      });
    });
  }
);

// The login route (POST request to /users/login)
router.post("/login", limiter, (req, res, next) => {
  // Use passport to authenticate the user
  passport.authenticate("local", (err, user, info) => {
    // If there's an error, send the error
    if (err) throw err;

    // If the user doesn't exist, send a message
    if (!user) res.send("No User Exists");
    // If the user exists, try to log them in
    else {
      req.logIn(user, (err) => {
        // If there's an error, send the error
        if (err) throw err;

        // If successful, send a success message
        res.send("Successfully Authenticated");

        // Optionally, you can also send the user data
        // res.send(user);
      });
    }
  })(req, res, next);
});

// The logout route (GET request to /users/logout)
router.get("/logout", (req, res) => {
  req.logout();
  res.send("You have logged out");
});

// Export the router so we can use it in server.js
module.exports = router;
