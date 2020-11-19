const logger = require('./logger');
/**
 * @name serverResponse
 * @param {Object} res express response object
 * @param {Number} code status code to return
 * @param {Ojectb} data object with response details
 * @returns {JSON} JSON response with status and response information
 */
const serverResponse = (req, res, code, data) => {
  logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}
  - ${code} - ${JSON.stringify(data)}
  `);
  res.status(code).json({ 
    OCX_Schema: "v1",
    OCXType: "Response",
    OCXComponent: "OCXDomain",
    OCXPayload: {
      ...data
    }
   });
}

/**
 * @name serverError
 * @param {Object} res express response object
 * @returns {JSON} JSON response with server error details
 */
const serverError = (req, res, code, message) =>
  res.status(500).json({ 
    OCX_Schema: "v1",
    OCXType: "Response",
    OCXComponent: "OCXDomain",
    OCXPayload: {
      ...message
    }
   });
  
module.exports = { serverResponse, serverError };