// constants
const express = require('express');
const domainAccessRoute = require('./domainAccess');
const domainHostRoute = require('./domainHosts');
const setup = require('./setup');

const routes = express.Router();

routes.use('/setup', setup);
routes.use('/domain-access', domainAccessRoute);
routes.use('/domain-host', domainHostRoute);

module.exports = routes;
