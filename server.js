// 'use strict';

// Constants
const app = require('./api/loaders/express');
const PORT = process.env.OCX_PORT_DOMAIN || 55502;
const HOST = '0.0.0.0';


try {
  app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
} catch (e) {
  console.error(e);
};
