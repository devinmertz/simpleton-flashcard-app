var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./userModel').schema;

var wordlistSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  flashcards: [{
    type: Schema.Types.ObjectId,
    ref: 'Flashcard'
  }],
  submitter: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model('WordList', wordlistSchema);