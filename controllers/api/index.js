const router = require('express').Router();
const userRoutes = require('./userRoutes');
const studyGroupRoutes = require('./studyGroupRoutes');
const notesRoutes = require('./notesRoutes');
const toDoRoutes = require('./toDoRoutes');
const subjectRoutes = require('./subjectRoutes');


router.use('/users', userRoutes);
router.use('/studygroup', studyGroupRoutes);
router.use('/notes', notesRoutes);
router.use('/todo', toDoRoutes);
router.use('/subject', subjectRoutes);


module.exports = router;