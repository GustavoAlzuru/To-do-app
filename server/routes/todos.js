var express = require('express');
const { getTasks, createTask, removeTodo } = require('../controllers/tasksControllers');
var router = express.Router();

/* GET users listing. */
router.get('/', getTasks);
router.post('/', createTask)
router.delete('/:id', removeTodo)

module.exports = router;
