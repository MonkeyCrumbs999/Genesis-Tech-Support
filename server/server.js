const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const userRouter = require("./routes/users");
const bcrypt = require("bcryptjs");
const cors = require("cors");

require("dotenv").config();

const app = express();

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "https://thriving-palmier-d79b26.netlify.app" }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log("Attempting to find user:", username); // Log the username
      let user = await User.findOne({ username: username });
      if (!user) {
        console.log("User not found"); // Log if the user is not found
        return done(null, false, { message: "Incorrect username." });
      }

      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        console.log("User found and password matched"); // Log if the user is found and password matches
        return done(null, user);
      } else {
        console.log("Password did not match"); // Log if the password did not match
        return done(null, false, { message: "Incorrect password." });
      }
    } catch (err) {
      console.log("Error occurred:", err); // Log if an error occurred
      throw err;
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    let user = await User.findOne({ _id: id });
    cb(null, user);
  } catch (err) {
    cb(err, null);
  }
});

app.use("/users", userRouter);

// Add a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
