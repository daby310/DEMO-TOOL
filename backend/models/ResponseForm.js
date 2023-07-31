const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let responseSchema = new Schema({
  fr: {
    type: Number
  },
  level: {
    type: Number
  },
  question: {
    type: Number
  },
  answer:{
    type: String
  },
  comment:{
    type: String
  }
}, {
    collection: 'responses'
  })
  
module.exports = mongoose.model('ResponseForm', responseSchema)