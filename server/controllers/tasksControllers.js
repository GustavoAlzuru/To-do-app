const tasksModel = require('../models/tasksModel')

module.exports = {
    getTasks: async function(req, res, next) {
        try{
            const tasks = await tasksModel.find()
            res.json(tasks)
        }catch(err){
            console.log(err)
        }
    },
    createTask: async function(req, res, next) {
        try{
            const task = new tasksModel({
                todo: req.body.todo,
                completed: req.body.completed,
                inProgress: req.body.inProgress
            })
            const save = await task.save()
            res.json(save)
        }catch(err){console.log(err)}
    },
    removeTodo: async function(req, res, next) {
        try{
            const deleteRes = await tasksModel.deleteOne({_id: req.params.id})
            res.json(deleteRes)
        }catch(error){
            console.log(error)
        }
    }
}