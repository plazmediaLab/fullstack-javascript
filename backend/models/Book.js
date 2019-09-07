const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  isbn: {tupe: String, required: true},
  imagePath: {type: String, required: true},
  create_at: {type: Date, default: Date.now}
});

module.exports = model('Book', BookSchema);