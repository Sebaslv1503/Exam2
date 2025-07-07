const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: String,
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
