var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userModel').schema;
var Flashcard = require('./flashcardModel');
var Category = require('./categoryModel');

var wordlistSchema = new Schema({
  category: {
    type: Schema.types.ObjectId,
    ref: "Category",
  },
  flashcards: [{
    type: Schema.types.ObjectId,
    ref: 'Flashcard'
  }],
  submitter: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model('WordList', wordlistSchema );