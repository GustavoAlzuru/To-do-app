const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/To-do-app')
.then(() => {console.log('conectado')})
.catch((error) => console.log(error))

module.exports = mongoose