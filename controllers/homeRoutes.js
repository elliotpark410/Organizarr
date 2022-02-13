// Home Routes should only be for GET routes and res.render
// res.json only for APIs
// POST, PUT, or DELETE in API routes
// only need withAuth for dashboard, edit, post, or delete


// Express router is a class which helps us to create router handlers e.g. get, post, delete, put routes
const router = require('express').Router();

// Export User model
const { User, ToDo, Subject, StudyGroup, Notes } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: ToDo }, { model: Notes }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/studygroup', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const studyGroupData = await StudyGroup.findAll({
      include: [{ model: Subject }],
    });

    const studyGroup = studyGroupData.get({ plain: true });

    res.render('studygroup', {
      ...studyGroup,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// when they route to signup page, it will render singup.handlebars
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

// Export module
module.exports = router;
