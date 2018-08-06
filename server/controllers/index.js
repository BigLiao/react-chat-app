const Router = require('express').Router();
const userRouter = require('./user');

// user router
Router.use('/user', userRouter);

Router.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


module.exports = Router;