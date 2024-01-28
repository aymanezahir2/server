const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosmeticSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  typeSc: {
    type: [String],
    required: true,
  },
  prod: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  desc: {
    type: [String],
    required: true,
  },
});



const CosmeticsArray = mongoose.model('myNew', cosmeticSchema, 'myNew');

module.exports = CosmeticsArray
