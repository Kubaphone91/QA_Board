const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: 10
  },
  description: {
    type: String,
    maxlength: 200
  },
  answers: [{
    type: Schema.Types.ObjectId,
    ref: "Answer"
  }],
  answerCount: {
    type: Number
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true,
  usePushEach: true
});

module.exports = mongoose.model('Post', postSchema);
