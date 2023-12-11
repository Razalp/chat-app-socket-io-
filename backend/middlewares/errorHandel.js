// const notFound = (req, res, next) => {
//     const error = new Error(`Not Found`);
//     res.status(404);
//     next(error);
//   };
  
//   const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode || 500;
//     res.status(statusCode).json({
//       message: err.message,
//       stack: process.env.NODE_ENV === "production" ? "Sorry, an error occurred." : err.stack,
//     });
//   };
  
//   module.exports = { notFound, errorHandler };
  