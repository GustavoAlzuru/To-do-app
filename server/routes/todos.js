var express = require('express');
const { getTasks, createTask, removeTodo, updateTodo } = require('../controllers/tasksControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', getTasks);
router.post('/', createTask)
router.put('/:id', updateTodo)
router.delete('/:id', removeTodo)

module.exports = router;
