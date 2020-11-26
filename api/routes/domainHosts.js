// constants
const express = require('express');
const domainHostController = require('../controllers/domainHostsController');
const routeValidator = require('../middleware/routeValidator');
const emptyBody = require('../middleware/emptyBody');
const verification = require('../middleware/auth');


const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
      "message": "Welcome to OctopusX Domain Service. This is domain host",
    });
  });


/**
 * @swagger
 * /api/v1/domain_host/routes:
 *  post:
 *    summary: Route for creating a new in domain_host route
 *    description: creating a new in domain_host route in domain_host microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
router.post('/create', emptyBody, verification, domainHostController.add);

/**
 * @swagger
 * /api/v1/domain_host/create
 *  get:
 *    summary: Route for get a route in access microservice
 *    description: get a profile in access microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */

router.get('/fetch/:id', verification, domainHostController.find);

/**
 * @swagger
 * /api/v1/domain_host/fetch/:id
 *  delete:
 *    summary: Route for delete a route in access microservice
 *    description: delete a route in access microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */

router.get('/fetch', verification, domainHostController.findAll);

/**
 * @swagger
 * /api/v1/domain_host/fetch/:id
 *  delete:
 *    summary: Route for delete a route in access microservice
 *    description: delete a route in access microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */

router.delete('/:id', verification, domainHostController.remove);


module.exports = router;