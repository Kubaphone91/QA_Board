const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  }
},{
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);
