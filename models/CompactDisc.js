const mongoose = require('mongoose');

const compactDiscSchema = new mongoose.Schema({
  serialNumber: { type: Number, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  state: { type: String, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('CompactDisc', compactDiscSchema);