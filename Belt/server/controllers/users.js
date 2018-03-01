const mongoose = require('mongoose');
const session = require('express-session');

module.exports = {
  login: (req, res) => {
    req.session.user = req.body.name;
    return res.json(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  },
  currentUser: (req, res) => {
    if(!req.session.user){
      return res.status(401).send("Not logged in/user must be created")
    }
    else{
      return res.json(req.session.user);
    }
  }
}
