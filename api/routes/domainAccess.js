// constants
const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth')
const domainAccessController = require('../controllers/domainAccessController');

router.post('/invite', Auth.verifyAccess, domainAccessController.invite);
router.post('/approve', Auth.verifyAccess, domainAccessController.approve);
router.post('/reject', Auth.verifyAccess, domainAccessController.reject);
