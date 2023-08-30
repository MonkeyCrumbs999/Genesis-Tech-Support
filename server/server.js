const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors');
const { MONGODB_URI, SESSION_SECRET, PORT, CORS_ORIGIN } = require("./config");
const passport = require("./auth");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./db");

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "mySessions",
});

store.on("error", function (error) {
  console.log(error);
});

app.set("trust proxy", 1);

app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day by default
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.body.rememberMe) req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 30; // 30 days
  else req.session.cookie.expires = false; // Expires at end of session
  next();
});

app.use(passport.initialize());
app.use(passport.session());

connectDB()
  .then(() => {
    console.log("MongoDB connected...");

    app.use("/user", userRoutes);

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });