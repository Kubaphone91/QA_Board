const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  questions: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  answers: {
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }
},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);
