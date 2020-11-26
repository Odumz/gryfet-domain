console.log('Hi oh there');
// Constants
const express = require('express');
console.log('Hi there');
// import express, { json, urlencoded } from 'express';
const swaggerUi = require('swagger-ui-express');
console.log('Hi la there');
const swaggerJsDoc = require('swagger-jsdoc');
console.log('Hi cun there');
const cors = require('cors');
console.log('Hi bila there');
const logger = require('./utils/logger');
console.log('Hi osx there');
const morgan = require('morgan');
console.log('Hi esr there');
require('dotenv').config();
console.log('Hi tre there');
const routes = require('./routes');
console.log('Hi los there');
// const Post = require('./utils/request/index');
console.log('Hi pla there');
// const addEntity = require('./utils/request/data');

console.log('Hi there');

const PORT = process.env.OCX_PORT_DOMAIN || 55502;
console.log('Nah Ijabs teach me');
const options = {
  // List of files to be processed. You can also set globs './routes/*.js'
  apis: ['./api/server.js', './api/routes/*js'],
  basePath: '/',
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      openapi: '3.0.1',
      description: 'OCX API with autogenerated swagger doc',
      swagger: '3.0',
      title: 'ocx domain',
      contact: {
        name: 'odumosu oluwashina',
        email: 'oluwashinaodumosu@gmail.com',
      },
      servers: ['http://localhost:55502'],
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          description: 'JWT authorization of an API',
          name: 'Authorization',
          bearerFormat: 'JWT',
        },
      },
    },
  },
};

const specs = swaggerJsDoc(options);
console.log('how to use');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: logger.stream }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(500).send('server error, this will be resolved shortly!');
});
app.disable('x-powered-by');

const HOST = '0.0.0.0';

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to test if app is working
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/', (req, res) => {
  res.status(200).send('Welcome to OCX:Domain');
});
app.use('/domain/v1', routes);
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

try {
  app.listen(PORT, HOST, async () => {
    logger.info(`Running on http://${HOST}:${PORT}`);
  });
} catch (e) {
  console.error(e);
}

module.exports = app;
