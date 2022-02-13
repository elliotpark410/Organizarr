const router = require('express').Router();
const { StudyGroup } = require('../../models');


router.post('/', async (req, res) => {
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


router.put('/:id', async (req, res) => {
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


router.delete('/:id', async (req, res) => {
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
