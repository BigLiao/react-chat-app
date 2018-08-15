
const config = {
  
}

config.database = {
  server: 'mongodb://120.79.130.71:27017',
  database: 'react-chat-app',
  user: 'liao',
  password: '123456',
  // host: '120.79.130.71',
  host: '120.78.163.217',
  port: 27017
}

config.redis = {
  client: 'session',
  // host: '120.79.130.71',
  host: '120.78.163.217',
  port: 6379,
  password: 'liao_redis'
}

module.exports = config;