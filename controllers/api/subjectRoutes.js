const router = require('express').Router();
const { Subject, StudyGroup } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const subjectData = await Subject.findAll({
      include: [
        {
          model: StudyGroup,
          attributes: ['url', 'time', 'studyPreference'],
        },
      ],
    });
    
    const subject = subjectData.get({ plain: true });

    res.render('subject', {
      ...subject,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const subjectData = await Subject.findByPk(req.params.id, {
      include: [
        {
          model: StudyGroup,
          attributes: ['url', 'time', 'studyPreference'],
        },
      ],
    });

    const subject = subjectData.get({ plain: true });

    res.render('todo', {
      ...subject,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newSubject = await Subject.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSubject);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const subjectData = await Subject.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!subjectData) {
      res.status(404).json({ message: 'No subject found with this id!' });
      return;
    }

    res.status(200).json(subjectData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const subjectData = await Subject.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!subjectData) {
      res.status(404).json({ message: 'No subject found with this id!' });
      return;
    }

    res.status(200).json(subjectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
