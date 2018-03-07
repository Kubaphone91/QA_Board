const mongoose = require('mongoose');

const { Schema } = mongoose;
const answerSchema = new Schema({
  answer: {
    type: String,
    required: [true, 'Content is required'],
    minlength: 5
  },
  details: {
    type: String,
    maxlength: 200
  },
  likes: {
    type: Number,
    default: 0
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
    timestamps: true
});

module.exports = mongoose.model('Answer', answerSchema);
