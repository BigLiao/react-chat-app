const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModal = {
  user: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  avatar: { type: String },
  desc: { type: String },
  position: { type: String },
  company: String,
  money: Number
};

const UserSchema = new Schema(userModal);

module.exports = mongoose.model('user', UserSchema);