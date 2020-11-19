import { serverResponse } from '../utils';

/**
 * @name emptyBody
 * @param {Object} request express response object
 * @param {Object} response express response object
 * @param {Function} next next function to return
 * @returns {JSON} JSON response with status and response information
 */
const emptyBody = (request, response, next) => {
  const { body } = request;
  if (Object.keys(body).length === 0) {
    serverResponse(request, response, 400, { message: 'empty request body' });
  } else {
    next();
  }
};

module.exports = emptyBody;