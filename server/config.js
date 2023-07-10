require("dotenv").config();

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env file");
}

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not defined in .env file");
}

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PORT: process.env.PORT || 5000,
  CORS_ORIGIN: "https://thriving-palmier-d79b26.netlify.app", // Added CORS origin
};
