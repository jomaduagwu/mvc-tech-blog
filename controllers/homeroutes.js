const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment } = require('../models');
// const { restore } = require('../models/User'); needed?
const withAuth = require('../util/auth');

// get all posts
router.get('/', withAuth, async (req, res) => {
  // router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'title', 'content'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'postId', 'userId'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
      // order: [['created_at', 'DESC']],
    })
    .then(postData => { //needed?
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts)

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId
    });
  })
 } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get('/post/:id', async (req, res) => {
  try{
    const postData = await Post.findOne({ 
    where: {
      id: req.params.id, 
    },
    attributes: ['id', 'title', 'userId', 'description'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment', 'postId', 'userId'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });
  // .then(postData => {
    if (!postData) {
      res.status(404).json({message: 'No post found with this id'});
      return;
    }
    const post = postData.get({plain: true});
    console.log(post);

    res.render('singlePost', {
      post,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});


// login
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// signup
router.get('/signup', async(req, res) => {
  res.render('signup');
})

module.exports = router;
