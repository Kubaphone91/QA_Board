const mongoose = require('mongoose');
//const session = require('express-session');
//const Answer = require('../models/answer');
const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
  addPost: (req, res) => {
    console.log(req.body);
    Post.create(req.body, (err, question) => {
      if(err){
        return res.json(err);
      }
      User.findOneAndUpdate(req.body.user, {$push : { questions: question._id}}, { new: true}, (err, user) =>{
        if(err){
          return res.json(err);
        }
        return res.json(question);
      })
    })
  },
  showAll: (req, res) => {
    Post.find({})
      .populate('user answers')
      .exec((err, questions) => {
        if(err){
          return res.json(err);
        }
        return res.json(questions);
      })
  },
  grabPost: (req, res) => {
    Post.findById(req.params.id)
      .populate({
        path: 'user',
        model: 'User',
        populate: {
          path: 'answers',
          model: 'Answer'
        }
      })
      .populate({
        path: 'answers',
        model: 'Answer',
        populate: {
          path: 'user',
          model: 'User'
        }
      })
      .exec((err, question) => {
        if(err){
          return res.json(err);
        }
        return res.json(question);
      })
  }
}
