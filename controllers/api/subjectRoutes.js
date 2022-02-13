const router = require('express').Router();
const { Subject } = require('../../models');
const withAuth = require('../../utils/auth');



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
