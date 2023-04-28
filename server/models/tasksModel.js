const mongoose = require('../config/mongodb')

const tasksSchema = mongoose.Schema({
    todo: String,
    completed: Boolean,
    inProgress: Boolean
})

module.exports = mongoose.model("tasks", tasksSchema)
