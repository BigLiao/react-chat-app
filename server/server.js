const express = require('express');
const router = require('./router/router');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const config = require('./config').database;

mongoose.connect(config.server, {
  dbName: config.database,
  user: config.user,
  pass: config.password
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(router);
app.listen(9527, function () {
  'Server is runing at port 9527...'
});
