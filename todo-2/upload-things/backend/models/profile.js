const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: { type: String, required: true },
  imagePaths: { type: Array, required: true }
});

module.exports = mongoose.model('Profile', profileSchema);