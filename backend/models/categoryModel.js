var mongose = require('mongoose');
var Schema = mongose.Schema;
var WordList = require("./wordListModel");
var Flashcard = require("./flashcardModel");

var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
              'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'TH', 'CH', 'SH','ZH'];

var categorySchema = new Schema({
  letter: {
    type: String,
    required: true
  },
  ipaSymbol: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  blend: {
    type: Boolean,
    required: true,
    default: false
  },
  isRBlend: {
    type: Boolean,
    required: true,
    default: false
  },
  wordlists: [{
    type: Schema.types.ObjectId,
    ref: 'WordList'
  }],
  flashcards: [{
    type: Schema.types.ObjectId,
    ref: 'Flashcard'
  }]


});

module.exports = mongoose.model('Category', categorySchema);