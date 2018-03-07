const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  question: {
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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
