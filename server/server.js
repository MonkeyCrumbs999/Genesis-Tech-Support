const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
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

app.use((req, res, next) => {
  const allowedOrigins = {
    production: process.env.CORS_ORIGIN_PRODUCTION,
    development: process.env.CORS_ORIGIN_DEVELOPMENT,
  };
  const origin = req.headers.origin;
  if (origin === allowedOrigins[process.env.NODE_ENV]) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
