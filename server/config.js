require("dotenv").config();

const ENV = process.env.ENV;
const MONGODB_URI =
  ENV === "production"
    ? process.env.MONGODB_URI_PRODUCTION
    : process.env.MONGODB_URI_DEVELOPMENT;
const CORS_ORIGIN =
  ENV === "production"
    ? process.env.CORS_ORIGIN_PRODUCTION
    : process.env.CORS_ORIGIN_DEVELOPMENT;

if (!MONGODB_URI || !process.env.SESSION_SECRET || !CORS_ORIGIN) {
  throw new Error(
    `MONGODB_URI: ${MONGODB_URI}, SESSION_SECRET: ${process.env.SESSION_SECRET}, CORS_ORIGIN: ${CORS_ORIGIN} are not defined`
  );
}

module.exports = {
  MONGODB_URI: MONGODB_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PORT: process.env.PORT || 5000,
  CORS_ORIGIN: CORS_ORIGIN,
};
