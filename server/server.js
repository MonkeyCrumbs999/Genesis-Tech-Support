const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const { MONGODB_URI, SESSION_SECRET, PORT, CORS_ORIGIN } = require("./config");
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

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  session({
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: true, // set this to true in production
      httpOnly: true, // The cookie is not accessible via client side script
      sameSite: "none", // The cookie cannot be accessed by other sites
    },
    store: store, // using MongoDB session store
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
