const express = require('express');
const router = require('./controllers/index');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const mongoose = require('mongoose');
const config = require('./config');

const mongoUri = `mongodb://${config.database.user}:${config.database.password}@${config.database.host}:${config.database.port}/${config.database.database}`;
mongoose.connect(mongoUri, {
  auth: {
    authdb: 'admin'
  },
  useNewUrlParser: true
}).catch(err => console.log('数据库连接失败'));

const redisOption = {
  host: config.redis.host,
  port: config.redis.port,
  pass: config.redis.password,
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
