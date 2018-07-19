const mongoose = require('mongoose');
const config = require('../config').database;

mongoose.connect(config.server, {
  dbName: config.database,
  user: config.user,
  pass: config.password
});