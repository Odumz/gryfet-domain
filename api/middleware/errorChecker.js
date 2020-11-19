
import { validationResult } from 'express-validator';
/**
 * @name checkForErrors
 * @param {Object} request express response object
 * @param {Object} response express response object
 * @param {Function} next next function to return
 * @returns {JSON} JSON response with status and response information
 */
export default (request, response, next) => {
  const errors = {};
  /**
   * @name errorFormatter
   * @param {Object} request express response object
   * @returns {JSON} JSON response with status and response information
   */
  const errorFormatter = ({ location, msg, param }) => {
    if (!Object.keys(errors).includes(location)) {
      errors[`${location}`] = {};
    }
    errors[`${location}`][`${param}`] = msg;
    return errors;
  };
  const validationResults = validationResult(request).array({ onlyFirstError: true });
  validationResults.forEach(resultObject => errorFormatter(resultObject));
  if (Object.keys(errors).length > 0) {
    response.status(400).json({ ...errors });
  } else {
    next();
  }
};