'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  return res.json({
    "OCX Schema": "v1",
    "OCXType": "Response",
    "OCXComponent": "OCXAuth",
    "OCXPayload": {}
  })
});

app.post('/a', (req, res) => {
  res.write("Hello World");
  res.end();
});

app.get('/home', (req, res) => {
  return res.json({
    "OCX Schema": "v1",
    "OCXType": "Response",
    "OCXComponent": "OCXAuth",
    "OCXPayload": {}
  })
});

app.post('/home', (req, res) => {
  return res.json({
    "OCX Schema": "v1",
    "OCXType": "Response",
    "OCXComponent": "OCXAccess",
    "OCXPayload": {}
  })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);