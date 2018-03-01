const mongoose = require('mongoose');
const Answer = require('../models/answer');
const Post = require('../models/post');

module.exports = {
  addPost: (req, res) => {
    if(!req.session.user){
      return res.sendStatus(401);
    }
    else{
      Post.create({ title: req.body.title, content: req.body.content, description: req.body.description}, (err, post) => {
        Post.find({}).sort("-likes")
          .exec((err, posts) => {
            return res.json(posts);
          })
      })
    }
  },
  addAnswer: (req, res) => {
    if(!req.session.user){
      return res.sendStatus(401);
    }
    Post.findOne({ _id: req.body.postId }, (err, post) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }
      else{
        Answer.create({ content: req.body.content, description: req.body.description, _post: req.body.postId}, (err, answer) => {
          question.answers.push(answer._id);
          question.save((err, post) => {
            res.json();
          })
        })
      }
    })
  },
  showAll: (req, res) => {
    Post.find({}).populate('answers')
      .exec((err, posts) => {
        if(err){
          console.log(err);
        }
        else{
          res.json(posts);
        }
      })
  },
  grabPost(req, res){
    Post.find({ _id: req.body.id}).populate('_user').populate({path: 'answers', populate: {path: '_user'}})
      .exec((err, grabbedPost) => {
        if(err){
          res.json(err);
          return res.sendStatus(500);
        }
        else{
          res.json(grabbedPost);
        }
      })
  },
  like(req, res){
    Answer.findOne({ _id: req.params.id}, (err, answer) => {
      if(err){
        console.log(err);
        return;
      }
      else{
        answer.likes += 1;
        answer.save((err, likesAdded) => {
          if(err){
            console.log(err);
            return;
          }
          else{
            return res.json(likesAdded);
          }
        })
      }
    })
  }
}
