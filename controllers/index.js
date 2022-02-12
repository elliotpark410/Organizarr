// Express router is a class which helps us to create router handlers e.g. get, post, delete, put routes
const router = require('express').Router();

// exports code to /api and /homeRoutes files
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// router.use (path, function)
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export module
module.exports = router;
