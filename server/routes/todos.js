var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const todos = [
    {
    todo: 'Clean dishes',
    completed: false,
    inProgress: false,
    id:1
    },
    {
      todo: 'Organized kitchen',
      completed: false,
      inProgress: false,
      id:1
    },
    {
      todo: 'Prepare meal',
      completed: false,
      inProgress: false,
      id:1
    }
  ]
  res.json(todos)
});

module.exports = router;
