const mongoose = require('mongoose');
//const session = require('express-session');
const User = require('../models/user');

module.exports = {

  login: (req, res) => {
    User.findOne({ name: req.body.name }, (err, user) => {
      if(err){
        return res.json(err);
      }
      else if(!user){
        User.create(req.body, (err, user) => {
          if(err){
            return res.json(err);
          }
          else{
            return res.json(user);
          }
        })
      }
      else{
        return res.json(user);
      }
    })
  }
}
