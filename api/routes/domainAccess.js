// constants
const express = require('express');
const domainAccessController = require('../controllers/domainAccessController');
const CommonValidator = require('../middleware/CommonValidator');
const emptyBody = require('../middleware/emptyBody');
const verification = require('../middleware/auth');

const router = express.Router();


/**
 * @swagger
 * /api/v1/domain_access:
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
router.post('/', emptyBody, CommonValidator.checkProfileInput(), verification, Profile.add);

/**
 * @swagger
 * /api/v1/domain_access/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []    
 *    summary: Route for get a profile in domain microservice
 *    description: get a profile in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
router.get('fetch/:id', verification, domainAccessController.fetch);

/**
 * @swagger
 * /api/v1/domain/profile/{id}:
 *  delete:
 *    summary: Route for delete a profile in domain microservice
 *    description: delete a profile in domain microservice
 *    consumes:
 *    - application/json
 *    responses:
 *      '200':
 *        description: OK
 *      '409':
 *        description: conflicts, profile has been created before
 */
router.delete('/:id', verification, Profile.remove);


router.get('/', (req, res, next) => {
    res.status(200).json({
      "message": "Welcome to OctopusX Domain Service. This is domain access",
    });
  });

router.post('/create', function(req, res) {domainAccessController.create});
router.post('/fetch', function(req, res) {domainAccessController.fetch});
router.post('/update', function(req, res) {domainAccessController.update});
router.post('/delete', function(req, res) {domainAccessController.delete});

module.exports = router;
