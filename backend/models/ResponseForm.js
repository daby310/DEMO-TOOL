// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
  
// let responseSchema = new Schema({
//   fr: {
//     type: Number
//   },
//   level: {
//     type: Number
//   },
//   question: {
//     type: Number
//   },
//   answer:{
//     type: String
//   },
//   comment:{
//     type: String
//   }
// }, {
//     collection: 'responses'
//   })
  
// module.exports = mongoose.model('ResponseForm', responseSchema)


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  srNo: {
    type: String,
    required: true,
  },
  sr: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const levelSchema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  questions: [questionSchema],
});

const frSchema = new Schema({
  fr: {
    type: Number,
    required: true,
  },
  levels: [levelSchema],
});

module.exports = mongoose.model('ResponseForm', frSchema);





// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const frSchema = new Schema({
//   fr: {
//     type: Number,
//     required: true,
//   },
//   levels: [{
//     level: {
//       type: String,
//       required: true,
//     },
//     questions: [{
//       srNo: {
//         type: String,
//         required: true,
//       },
//       sr: {
//         type: String,
//         required: true,
//       },
//       desc: {
//         type: String,
//         required: true,
//       },
//       question: {
//         type: String,
//         required: true,
//       },
//       hint: {
//         type: String,
//         required: true,
//       },
//       response: {
//         type: String,
//         required: true,
//       },
//       comment: {
//         type: String,
//         required: true,
//       },
//     }],
//   }],
// });


// module.exports = mongoose.model('ResponseForm', frSchema);