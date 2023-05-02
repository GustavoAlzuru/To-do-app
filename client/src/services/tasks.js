export const getTodos = async () => {
    try{
        const alltasks = await fetch('http://localhost:3000/todos')
        const response = await alltasks.json()
        return response
    }catch(err){
        console.log(err)
    }
}
export const sentTodo = async (input) => {
    const data = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify({todo: input, completed: false, inProgress: false}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await data.json()
    return response
}
export const isComplete = async (id, newTask) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const removeTodo = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    })
}