// constants
console.log('Hi there');
const express = require('express');
console.log('Hi a there');
const domainAccessRoute = require('./domainAccess');
console.log('Hi ra there');
const domainHostRoute = require('./domainHosts');
console.log('Hi ta there');
const setup = require('./setup');
console.log('Hi da there');

const routes = express.Router();
console.log('Hi sva there');

routes.use('/setup', setup);
console.log('Hi zar there');
routes.use('/domain-access', domainAccessRoute);
console.log('Hi ago there');
routes.use('/domain-host', domainHostRoute);
console.log('Hi za there');

module.exports = routes;
