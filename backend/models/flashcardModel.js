var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var flashcardSchema = require('./user').schema;

var flashchardSchema = new Schema({
  word: {
    type: String,
    required: true,
  },
  poemText: {
    type: String,
    required: true
  },
  //submitter: {
  //  type: Schema.Types.ObjectId,
  //  ref: 'User'
  //},
  categories: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Flashcard', flashchardSchema );