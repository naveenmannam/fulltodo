const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const { userRouter, todoRouter } = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.use('/api', userRouter);
app.use('/api', todoRouter);

// Client ID
// 1068249379017 - ge7pnvlhfesal7mmsi0ko5oj1dk3lpak.apps.googleusercontent.com
//Client secret
// 28SLpqLS0jHhpJ2GpofjIrVG

app.all('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'Application/Json');
  next();
});
app.get('/', (req, res) => {
  res.json({ message: 'App working' });
});

app.get('*', (req, res) => {
  res.statusCode = 404;
  res.send('404 Error , Page not found');
});

module.exports = app;
