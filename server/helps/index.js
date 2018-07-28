const crypto = require('crypto');
const md5 = crypto.createHash('md5');

function encodePassword (string) {
  md5.update(string);
  return md5.digest('hex');
}

module.exports.encodePassword = encodePassword;
