/**
 * App level error handler
 * @class
 *
 * @returns {Error} error object
 */
export class AppError extends Error {
  /**
   * @param {string} message error message
   * @param {number} statusCode error code
   */
  constructor(message, statusCode) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
    const date = new Date();
    this.name = 'AppError';
    this.status = statusCode;
    this.date = date.toISOString();
  }
}

/**
 * Generates error and sends to app error handler
 *
 * @param {Function} next express next function
 * @param {string} message Specific error message
 * @param {number} statusCode Error Status Code
 *
 * @returns {Function} next express next function with error
 */
export const errorResponse = (next, message = '', statusCode = 500) => {
  const error = new AppError(message, statusCode);
  return next(error);
};

/**
 * Returns response to the user
 *
 * @param {Object} res express response object
 * @param {string} message message to be returned
 * @param {number} statusCode Response Status Code
 * @param {Object | string | undefined} data data payload if any
 *
 * @returns {Object} express response object
 */
export const successResponse = (res, message, statusCode = 200, data) =>
  res.status(statusCode).send({
    status: 'success',
    message,
    data,
  });
