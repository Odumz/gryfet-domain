// constants
const express = require('express');
const Auth = require('../middleware/auth')

const domainAccessRoute = require('./api/routes/domainAccess');
const domainHostRoute = require('./api/routes/domainHost');

const router = express.Router();

router.use('/domain-access', Auth.protect, domainAccessRoute);
router.use('/domain-host', Auth.protect, domainHostRoute);

export default router;