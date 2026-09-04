export const errorHandler = (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Invalid ID'
    });
  }

  if (err.code === 11000) {
    console.error(err)

    return res.status(409).json({
      message: 'A resource with that value already exists'
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validation failed'
    });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal server error'
  })
};