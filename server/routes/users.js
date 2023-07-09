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

// The register route(POST request to /users/register)
router.post(
  "/register",
  [
    body("username").trim().escape(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 5 }),
  ],
  limiter,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ username: username });
      if (user) return res.status(400).json({ msg: "User already exists" });

      let newUser = new User({ username, email, password });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newUser.password, salt);

      // Log the hashed password
      console.log(`Hashed password: ${hash}`);

      newUser.password = hash;

      user = await newUser.save();
      res.json({ message: "User added" });
    } catch (err) {
      res.send("Error: " + err);
    }
  }
);

router.post("/login", limiter, (req, res, next) => {
  // Use passport to authenticate the user
  passport.authenticate("local", (err, user, info) => {
    // If there's an error, send the actual error message
    if (err) return res.status(500).json({ error: err.message });

    // If the user doesn't exist, send a more descriptive message
    if (!user)
      return res.status(400).json({
        error:
          "Failed to login. The supplied username does not match any account.",
      });
    // If the user exists, try to log them in
    else {
      req.logIn(user, async (err) => {
        // If there's an error, send the error message
        if (err) return res.status(500).json({ error: err.message });

        // Check password
        const validPass = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (!validPass) {
          return res.status(401).json({
            error: "Failed to login. The password you've entered is incorrect.",
          });
        }

        // If successful, send a success message
        res.send("Successfully Authenticated");
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
