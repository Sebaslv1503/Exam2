const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true 
  },
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
});

module.exports = mongoose.model('Article', articleSchema);
