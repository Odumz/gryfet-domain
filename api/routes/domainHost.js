// constants
const express = require('express');
const router = express.Router();
const Auth = require('../middleware/auth')
const domainHostController = require('../controllers/domainHostController');

router.post('/add', Auth.verifyAccess, domainHostController.add);
router.get('/fetch', Auth.verifyAccess, domainHostController.fetch);
router.delete('/remove', Auth.verifyAccess, domainHostController.reject);
