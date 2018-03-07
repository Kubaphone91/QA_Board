const Posts = require('../controllers/posts');
const Users = require('../controllers/users');
const Answers = require('../controllers/answers');
const path = require('path');

module.exports = app => {
//User routes
  app.post('/login', Users.login)

//Posts and Answers
  app.get('/questions', Posts.showAll)
  app.post('/new_question', Posts.addPost)
  app.get('/question/:id', Posts.grabPost)
  app.post('/question/new-answer', Answers.addAnswer)
  app.put('/answers/:id', Answers.increaseLikes)

  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./dist/index.html'));
})
}
