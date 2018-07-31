const crypto = require('crypto');
const salt = 'ABC_123';

function encodePassword (string) {
  const md5 = crypto.createHash('md5');
  string = string + salt;
  md5.update(string);
  string = md5.digest('hex');
  return crypto.createHash('md5').update(string).digest('hex');
}

module.exports.encodePassword = encodePassword;
