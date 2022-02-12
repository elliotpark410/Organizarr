const router = require('express').Router();
const { User, Notes, ToDo, Subject, StudyGroup } = require('../models');
const withAuth = require('../utils/auth');


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
