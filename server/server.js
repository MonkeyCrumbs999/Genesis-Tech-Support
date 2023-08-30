const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors');
const { MONGODB_URI, SESSION_SECRET, PORT } = require("./config");
const passport = require("./auth");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db");

// Define MongoDB store
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "mySessions",
});

store.on("error", function (error) {
  console.log(error);
});

app.set("trust proxy", 1);

// Use cors package for handling CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN_DEVELOPMENT, // Replace with your frontend application's URL
  credentials: true // Allows cookies to be sent
}));

app.use(
  session({
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: true, 
      httpOnly: true, 
      sameSite: "none", 
    },
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

// Connect to the database before setting up the routes
connectDB()
  .then(() => {
    console.log("MongoDB connected...");

    // Routes
    app.use("/user", userRoutes);

    // Start listening for requests
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });
