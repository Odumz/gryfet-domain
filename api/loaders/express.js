
// constants
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes/web');

const responseHandler = require('../utils/responseHandlers');

const isProduction = false;


// App
const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.disable('x-powered-by');


// Routes
app.use('/api/v1', routes);
// app.use('/domain-access', domainAccessRoute);
// app.use('/domain-host', domainHostRoute);

app.get('/', (req, res) => successResponse(res, 'Welcome to OctopusX Domain Service'));

app.get('/test', (req, res) => {
  return res.json({
    "OCX Schema": "v1",
    "OCXType": "Response",
    "OCXComponent": "OCXAuth",
    "OCXPayload": {}
  })
});

// app.post('/a', (req, res) => {
//   res.write("Hello World");
//   res.end();
// });

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

app.use((req, res, next) =>{
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//       error: {
//           message: error.message
//       }
//   });
// });


app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  console.log(error);
  return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send({
    status: 'error',
    error: error.message,
    ...(!isProduction && { trace: error.stack }),
  });
});



module.exports = app;