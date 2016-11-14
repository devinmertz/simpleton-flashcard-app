var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var flashcardSchema = require('./userModel').schema;

var flashchardSchema = new Schema({
  word: {
    type: String,
    required: true,
  },
  poemText: {
    type: String,
    required: true
  },
  submitter: {
   type: Schema.Types.ObjectId,
   ref: 'User'
  },
  categories: {
    type: Array,
    required: true
  },
  wordlists: [{
    type: Schema.types.ObjectId,
    ref: 'WordList'
  }],
});

module.exports = mongoose.model('Flashcard', flashchardSchema );