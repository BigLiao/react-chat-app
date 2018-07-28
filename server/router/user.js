const express = require('express');
const Router = express.Router();

const user= require('../controllers/userController');

Router.get('/list', function (req, res) {
  user.list().then(function (data) {
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
  // User.create({
  //   user: reqParams.user,
  //   password: reqParams.password,
  //   type: reqParams.type || null
  // }, function () {
  //   res.json({code: 200, msg: '注册成功'})
  // })
});

Router.post('/hhh', function (req, res) {
  // req.
})

module.exports = Router;