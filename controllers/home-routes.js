const router = require('express').Router();
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
    // console.log(req.session);
    Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        // pass a single post object into the homepage template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
        })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }


    res.render('login');
});


router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'content',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
        console.log(post)

        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



router.get('/comment/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'comment_text',
        'user_id',
        'post_id',
        'createdAt'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
  
        // serialize the data
        const comment = dbCommentData.get({ plain: true });
        console.log(comment)
        console.log(comment.user_id)
        console.log( req.session.user_id)
        if (comment.user_id === req.session.user_id){
        res.render('edit-comment', {
            comment,
            loggedIn: req.session.loggedIn
          }); }
          else {
            res.render('homepage', {
              comment,
              loggedIn: req.session.loggedIn
            });
          }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



module.exports = router;