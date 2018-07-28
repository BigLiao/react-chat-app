const express = require('express');
const router = require('./controllers/index');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const config = require('./config').database;

const mongoUri = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`;
mongoose.connect(mongoUri, {
  auth: {
    authdb: 'admin'
  },
  useNewUrlParser: true
}).catch(err => console.log('数据库连接失败'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(router);
app.listen(9527, function () {
  'Server is runing at port 9527...'
});
