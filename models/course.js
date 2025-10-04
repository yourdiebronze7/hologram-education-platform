const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: String, required: true },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model('Course', courseSchema);