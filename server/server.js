const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const connectDB = require("./db");
const { PORT, SESSION_SECRET, CORS_ORIGIN } = require("./config");
const passport = require("./auth");
const userRoutes = require("./routes/userRoutes");
const loggingMiddleware = require("./middleware/logging");

connectDB();

app.use(loggingMiddleware); // Use the logging middleware

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
