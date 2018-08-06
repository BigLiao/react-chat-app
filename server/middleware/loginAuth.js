module.exports = function (req, res, next) {
  if (!req.session || !req.session.userinfo) {
    return res.json({
      code: 401,
      msg: '请先登录'
    });
  }
  next();
}