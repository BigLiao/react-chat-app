const express = require('express');
const userRouter = require('./router/user');
const app = express();
app.listen(9527, function () {
  'Server is runing at port 9527...'
});

app.use('/user', userRouter);
