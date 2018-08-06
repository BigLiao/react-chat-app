const express = require('express');
const Router = express.Router();
const User = require('../models/user');
const encodePassword = require('../helps').encodePassword;
const loginAuth = require('../middleware/loginAuth');
const validate = require('../helps/validate');

Router.get('/clearall', function (req, res) {
  User.deleteMany({}).then(data => {
    res.json({code:200, msg: '成功删除所有用户'})
  })
})

Router.get('/list', function (req, res) {
  User.find({}).then(function (data) {
    return res.json({
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
      code: 400,
      msg: '必须输入姓名'
    });
  }
  if (!reqParams.password) {
    return res.json({code: 400, msg: '必须输入密码'});
  }
  if (reqParams.password !== reqParams.password_confirmation) {
    return res.json({code: 400, msg: '密码和确认密码不相等'});
  }
  User.findOne({user: reqParams.user})
    .then(data => {
      if (data) {
        return res.json({code: 400, msg: '用户名已被注册'})
      }
  }).catch(err => {
    console.log(err);
    return res.json({code: 500, error: err})
  })
  User.create({
    user: reqParams.user,
    password: encodePassword(reqParams.password),
    gender: reqParams.gender || null
  }, function (err) {
    if (!err) {
      return res.json({code: 200, msg: '注册成功'});
    } else {
      return res.json({code: 500, error: err})
    }
  })
});

Router.post('/login', function (req, res) {
  if (!req.body.user) {
    return res.json({code: 400, msg: '请输入用户名'});
  }
  if (!req.body.password) {
    return res.json({code:400, msg: '请输入密码'});
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
      return res.json({code: 400, msg: '密码不正确'});
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

Router.get('/userinfo', loginAuth, function (req, res) {
  return res.json({code: 200, msg: 'ok', data: req.session.userinfo})
})

Router.post('/userinfo/update', loginAuth, function (req, res) {
  const {avatar, introduction, birthday} = req.body;
  if (!avatar || !introduction || !birthday) {
    return res.json({
      code: 400,
      msg: '信息填写不完整'
    })
  }
  if (!validate.birthday(birthday)) {
    return res.json({
      code: 400,
      msg: '生日格式不正确'
    })
  }
  const userinfo = req.session.userinfo;
  User.findById(userinfo._id)
  .update({
    $set: {
      introduction, avatar, birthday
    }
  })
  .exec(function (err) {
    if (err) {
      return res.json({code: 400, msg: '保存数据库失败'});
    }
    return res.json({code: 200, msg: 'ok'});
  })
})

function sendUserData (data) {
  return {
    user: data.user,
    gender: data.gender
  }
}

module.exports = Router;