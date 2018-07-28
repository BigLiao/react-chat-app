const Router = require('express').Router();
const userRouter = require('./user');

// user router
Router.use('/user', userRouter);


module.exports = Router;