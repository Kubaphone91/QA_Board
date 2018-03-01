const mongoose = require('mongoose');

const { Schema } = mongoose;
const answerSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Content is required'],
    minlength: 5
  },
  description: {
    type: String,
    maxlength: 200
  },
  likes: {
    type: Number,
    default: 0
  },
  postId: {
    type: String
  },
  _post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
}, {
    timestamps: true,
    usePushEach: true
});

module.exports = mongoose.model('Answer', answerSchema);
