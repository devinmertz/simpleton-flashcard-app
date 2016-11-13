var mongose = require('mongoose');
var Schema = mongose.Schema;

var categorySchema = new Schema({
  letter: {
    type: String,
    required: true
  },
  ipaSymbol: {
    type: String,
    required: true
  },
  position:{
    type: String,
    required: true
  },
  blend: {
    type: Boolean,
    required: true
  },
  isRBlend: {
    type: Boolean,
    required: true
  }

});

module.exports = mongoose.model('Category', categorySchema );