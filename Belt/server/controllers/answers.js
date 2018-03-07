const mongoose = require('mongoose');
const Answer = require('../models/answer');
const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
  addAnswer: (req, res) => {
    console.log('Inside answer controller');
    console.log(req.body);
    Answer.create(req.body, (err, answer) => {
      if(err){
        return res.json(err);
      }
      console.log(answer);
      Post.findByIdAndUpdate(req.body.question,
        { $push: { answers: answer }},
        { upsert: true, new: true },
        (err, question) => {
          console.log(question)
          console.log(err)
          if(err){
            return res.json(err);
          }
          User.findByIdAndUpdate(req.body.user, {$push: { answers: answer._id }}, { upsert: true, new: true }, (err,user) => {
            if(err){
              return res.json(err);
            }
            console.log(answer);
            return res.json(answer);
          })
        }
      )
    })
  },
  increaseLikes: (req, res) => {
    Answer.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 }}, { new: true }, (err, answer) => {
      if(err){
        return res.json(err);
      }
      return res.json(answer);
    })
  }
}
