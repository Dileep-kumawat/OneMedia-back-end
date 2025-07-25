const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('User', userSchema);