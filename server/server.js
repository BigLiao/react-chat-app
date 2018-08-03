const express = require('express');
const router = require('./controllers/index');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const mongoose = require('mongoose');
const config = require('./config').database;

const mongoUri = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`;
mongoose.connect(mongoUri, {
  auth: {
    authdb: 'admin'
  },
  useNewUrlParser: true
}).catch(err => console.log('数据库连接失败'));

const redisOption = {
  host: '127.0.0.1',
  port: 6379,
  ttl: 60 * 60 *24
};
app.use(session({
  store: new RedisStore(redisOption),
  secret: 'I am happy',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(router);
app.listen(9527, function () {
  'Server is runing at port 9527...'
});
