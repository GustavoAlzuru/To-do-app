import React, { useContext, useState } from 'react';
import TodoList from './TodoList';
import { sentTodo } from '../services/tasks';
import { TasksContext } from '../context/TasksContext';

const TodoBar = () => {
    const [input, setInput] = useState('')
    const {setTasks, tasks} = useContext(TasksContext)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(input){
            const sendTask = await sentTodo(input)
            setTasks([...tasks, sendTask])
            setInput('')
        }
    }
    const handleChange = (e) => {
        const newValue = e.target.value
        setInput(newValue)
    }
    
    return (
        <div className='w-full justify-center'>
            <form onSubmit={handleSubmit} className='flex justify-center mt-10 gap-8 sm:flex-row flex-col'>
                <input type="text" placeholder="Add here your TODO's" className='border border-black rounded px-5 py-1 outline-none sm:w-96 w-54' value={input} onChange={handleChange} maxLength='25'/>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-blue-800 text-white px-4 py-1 rounded w-20'>Add</button>
                </div>
            </form>
            <TodoList />
        </div>
    );
}

export default TodoBar;