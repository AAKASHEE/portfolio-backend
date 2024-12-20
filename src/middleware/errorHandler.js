// export default function errorHandler(err, req, res, next) {
//   console.error(err.stack);
  
//   res.status(err.status || 500).json({
//     message: err.message || 'Internal Server Error',
//     ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
//   });
// }

// filepath: /Users/aakashe/port_FOLIO_02/backend/src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler;