const express = require('express');
const Setup = require('../controllers/setup');

const routes = express.Router();

/**
 * @swagger
 * /api/v1/domain/setup/rollback:
 *  post:
 *    summary: Route for setup in domain microservice
 *    description: Route for setup in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
routes.post('/rollback', Setup.Reset);

/**
 * @swagger
 * /api/v1/domain/setup:
 *  post:
 *    summary: Route for setup in domain microservice
 *    description: Route for setup in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
routes.post('/', Setup.Create);


module.exports = routes;