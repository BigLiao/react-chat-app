const express = require('express');
const Router = express.Router();
const user = require('../models/user');
const encodePassword = require('../helps').encodePassword;

Router.get('/clearall', function (req, res) {
  user.deleteMany({}).then(data => {
    // res.json({code:200})
  })
})

Router.get('/list', function (req, res) {
  user.find({}).then(function (data) {
    res.json({
      code: 200,
      data: data
    })
  }).catch(err => {
    return res.json({
      code: 404,
      msg: 'not found'
    })
  })
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
  user.create({
    user: reqParams.user,
    password: encodePassword(reqParams.password),
    type: reqParams.type || null
  }, function () {
    res.json({code: 200, msg: '注册成功'})
  })
});

Router.post('/login', async function (req, res) {
  if (!req.body.user) {
    res.json({code: 520, msg: '请输入用户名'});
  }
  if (!req.body.password) {
    res.json({code:520, msg: '请输入密码'});
  }
  user.findOne({
    user: req.body.user
  }).then(data => {
    if (!data) {
      res.json({
        code: 404, msg: '用户未注册'
      })
    }
    if (encodePassword(req.body.password) !== data.password) {
      res.json({code: 520, msg: '密码不正确'});
    }

  }).catch(err => {
    res.json({
      code: 500,
      msg: '服务器错误'
    })
  })
})

module.exports = Router;