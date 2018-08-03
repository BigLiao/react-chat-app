const express = require('express');
const Router = express.Router();
const User = require('../models/user');
const encodePassword = require('../helps').encodePassword;

Router.get('/clearall', function (req, res) {
  User.deleteMany({}).then(data => {
    res.json({code:200, msg: '成功删除所有用户'})
  })
})

Router.get('/list', function (req, res) {
  User.find({}).then(function (data) {
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
  User.findOne({user: reqParams.user})
    .then(data => {
      if (data) {
        return res.json({code: 520, msg: '用户名已被注册'})
      }
  }).catch(err => {
    console.log(err);
  })
  User.create({
    user: reqParams.user,
    password: encodePassword(reqParams.password),
    type: reqParams.type || null
  }, function (err) {
    if (!err) {
      return res.json({code: 200, msg: '注册成功'});
    }
  })
});

Router.post('/login', function (req, res) {
  if (!req.body.user) {
    return res.json({code: 520, msg: '请输入用户名'});
  }
  if (!req.body.password) {
    return res.json({code:520, msg: '请输入密码'});
  }
  User.findOne({
    user: req.body.user
  }).then(data => {
    if (!data) {
      return res.json({
        code: 404, msg: '用户未注册'
      })
    }
    if (encodePassword(req.body.password) !== data.password) {
      return res.json({code: 520, msg: '密码不正确'});
    }
    req.session.userinfo = data;
    return res.json({code: 200, msg: 'ok', data: sendUserData(data)})
  }).catch(err => {
    console.log(err)
    return res.json({
      code: 500,
      msg: JSON.stringify(err)
    })
  })
});

Router.get('/info', function (req, res) {
  if (req.session.userinfo) {
    console.log(req.session.userinfo);
    return res.json({code: 200, msg: '已登录'});
  } else {
    return res.json({code: 401, msg: '未登陆'});
  }
})

function sendUserData (data) {
  return {
    user: data.user,
    type: data.type
  }
}

module.exports = Router;