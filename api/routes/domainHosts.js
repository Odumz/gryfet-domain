// constants
const express = require('express');
const domainHostController = require('../controllers/domainHostsController');
// const routeValidator = require('../middleware/routeValidator');
// const emptyBody = require('../middleware/emptyBody');
const verification = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to OctopusX Domain Service. This is domain host',
  });
});

/**
 * @swagger
 * /api/v1/domain_host/create:
 *  post:
 *    summary: Route for creating a new in domain_host route
 *    description: creating a new in domain_host route in domain_host microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, domain_host has been created before
 */
router.post('/create', verification, domainHostController.add);

/**
 * @swagger
 * /api/v1/domain_host/fetch/:id:
 *  get:
 *    summary: Route for get a domain_host in domain microservice
 *    description: get a domain_host in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '404':
 *        description: conflicts, domain_host not found
 */

router.get('/fetch/:id', verification, domainHostController.find);

/**
 * @swagger
 * /api/v1/domain_host/fetch:
 *  delete:
 *    summary: Route for fetch all domain_hosts in domain microservice
 *    description: fetch all domain_hosts in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '404':
 *        description: conflicts, no domain_host found
 */

router.get('/fetch', verification, domainHostController.findAll);

/**
 * @swagger
 * /api/v1/domain_host/:id:
 *  delete:
 *    summary: Route for delete a domain_host in domain microservice
 *    description: delete a domain_host in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '404':
 *        description: conflicts, domain_host not found
 */

router.delete('/:id', verification, domainHostController.remove);

module.exports = router;
