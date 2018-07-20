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
  const reqParams = req.body;
  if (!reqParams.user) {
    return res.json({
      code: 520,
      msg: '必须输入姓名'
    });
  }
  if (!reqParams.password) {
    return res.json({code: 520, msg: '必须输入密码'});
  }
  if (reqParams.password !== reqParams.password_confirmation) {
    return res.json({code: 520, msg: '密码和确认密码不相等'});
  }
  User.create({
    user: reqParams.user,
    password: reqParams.password,
    type: reqParams.type || null
  }, function () {
    res.json({code: 200, msg: '注册成功'})
  })
});

module.exports = Router;