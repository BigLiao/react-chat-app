const express = require('express');
const Router = express.Router();

const User = require('../models/user');

Router.get('/info', function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
      return res.json({
        code: 404,
        msg: 'not found'
      })
    }
    return res.json({
      code: 200,
      data: data
    })
  });
});

Router.post('/register', function (req, res) {
  return res.json(req.body);
});

module.exports = Router;