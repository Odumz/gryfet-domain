// constants
const express = require('express');
const domainAccessController = require('../controllers/domainAccessController');
// const CommonValidator = require('../middleware/CommonValidator');
// const emptyBody = require('../middleware/emptyBody');
const verification = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to OctopusX Domain Service. This is domain access',
  });
});

/**
 * @swagger
 * /api/v1/domain_access/create:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Route for creating a record in domain microservice
 *    description: creating a record in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, domain has been created before
 */
router.post('/create', verification, domainAccessController.add);

/**
 * @swagger
 * /api/v1/domain_access/fetch/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Route for get a domain_access in domain microservice
 *    description: get a domain_access in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, domain_access not found
 */
router.get('/fetch/:id', verification, domainAccessController.find);

/**
 * @swagger
 * /api/v1/domain_access/check:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Route for get all domain_accesses in domain microservice
 *    description: get all domain_accesses in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, no domain_access found
 */
router.post('/check', verification, domainAccessController.check);

/**
 * @swagger
 * /api/v1/domain_access/fetch:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Route for get all domain_accesses in domain microservice
 *    description: get all domain_accesses in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, no domain_access found
 */
router.get('/fetch', verification, domainAccessController.findAll);

/**
 * @swagger
 * /api/v1/domain_access/{id}:
 *  delete:
 *    summary: Route for delete a domain_access in domain microservice
 *    description: delete a domain_access in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, domain_access not found
 */
router.delete('/:id', verification, domainAccessController.remove);

module.exports = router;
