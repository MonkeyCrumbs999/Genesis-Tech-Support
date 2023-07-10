const loggingMiddleware = (req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.path}`);
  next();
};

module.exports = loggingMiddleware;
