const posts = require('../controllers/posts');
const users = require('../controllers/users');

module.exports = app => {
//User routes
  app.post('/login', users.login)
  app.get('/current', users.currentUser)
  app.delete('/logout', users.logout)

//Posts and Answers
  app.get('/posts', posts.showAll)
  app.post('/posts', posts.addPost)
  app.get('/posts/:id', posts.grabPost)
  app.post('/answers', posts.addAnswer)
  //app.get('/answers/:id', posts.like)

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./Belt/dist/index.html'));
  });
}
