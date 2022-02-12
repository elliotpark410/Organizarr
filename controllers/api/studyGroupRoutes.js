const router = require('express').Router();
const { Subject, StudyGroup } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const studyGroupData = await StudyGroup.findAll({
      include: [
        {
          model: Subject,
          attributes: ['name'],
        },
      ],
    });
    
    const studyGroup = studyGroupData.get({ plain: true });

    res.render('studygroup', {
      ...studyGroup,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const studyGroupData = await Subject.findByPk(req.params.id, {
      include: [
        {
          model: Subject,
          attributes: ['name'],
        },
      ],
    });

    const studygroup = studyGroupData.get({ plain: true });

    res.render('studygroup', {
      ...studygroup,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newStudyGroup = await StudyGroup.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newStudyGroup);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const studyGroupData = await StudyGroup.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!studyGroupData) {
      res.status(404).json({ message: 'No study group found with this id!' });
      return;
    }

    res.status(200).json(studyGroupData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const studyGroupData = await StudyGroup.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!studyGroupData) {
      res.status(404).json({ message: 'No study group found with this id!' });
      return;
    }

    res.status(200).json(studyGroupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
