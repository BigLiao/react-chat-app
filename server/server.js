const express = require('express');
const userRouter = require('./router/user');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('./models');

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);
app.listen(9527, function () {
  'Server is runing at port 9527...'
});