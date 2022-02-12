const router = require('express').Router();
const { ToDo, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const todoData = await ToDo.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    
    const todo = todoData.get({ plain: true });

    res.render('todo', {
      ...todo,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const todoData = await ToDo.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const todo = todoData.get({ plain: true });

    res.render('todo', {
      ...todo,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newTodo = await ToDo.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const todoData = await ToDo.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!todoData) {
      res.status(404).json({ message: 'No todo found with this id!' });
      return;
    }

    res.status(200).json(todoData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const todoData = await ToDo.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!todoData) {
      res.status(404).json({ message: 'No todo found with this id!' });
      return;
    }

    res.status(200).json(todoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
