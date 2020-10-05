'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.8';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.send('Welcome to OCX-Domain');
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);