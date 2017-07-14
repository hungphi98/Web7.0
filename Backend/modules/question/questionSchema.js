const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionSchema = new Schema({
  _id: {
    type: Number,
    require: true
  },
  content: {
    type: String,
    require: true,
    default: ''
  },
  answer: {
    yes : Number,
    no : Number
  }
}, {collection: 'questions'});

module.exports = mongoose.model('questions', questionSchema);
