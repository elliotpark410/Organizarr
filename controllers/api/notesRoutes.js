const router = require('express').Router();
const { Notes } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  try {
    const newNote = await Notes.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newNote);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const notesData = await Notes.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!notesData) {
      res.status(404).json({ message: 'No note found with this id!' });
      return;
    }

    res.status(200).json(notesData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const notesData = await Notes.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!notesData) {
      res.status(404).json({ message: 'No note found with this id!' });
      return;
    }

    res.status(200).json(notesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
