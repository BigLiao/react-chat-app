const validate = {};

validate.birthday = function (str) {
  const pattern = /^\d{4}-(0?[1-9]|1[012]-(0?[1-9]|[12]\d|3[01]))/;
  return pattern.test(str);
}

module.exports = validate;