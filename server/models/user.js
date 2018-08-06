const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModal = {
  user: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  avatar: { type: String },
  introduction: { type: String },
  id: {type: Number, index: true},
  birthday: {type: String}
};

const UserSchema = new Schema(userModal);

module.exports = mongoose.model('user', UserSchema);