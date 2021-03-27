const { Router } = require('express');

const Todo = require('../models/Todo');

const router = Router();

router.get('/list', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server side error on get Todos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = req.body;
    const newTodo = await Todo.create(todo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server side error on create Todo' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const todo = req.body;
    const { id } = req.params;
    const todoUpdated = await Todo.findByIdAndUpdate(id, todo, { new: true });
    res.status(201).json(todoUpdated);
  } catch (error) {
    res.status(500).json({ message: 'Server side error on update Todo' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndRemove(id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Server side error on delete Todo' });
  }
});


module.exports = router;
