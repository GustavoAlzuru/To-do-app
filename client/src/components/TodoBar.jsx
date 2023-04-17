import React from 'react';
import TodoList from './TodoList';

const TodoBar = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='w-full justify-center'>
            <form onSubmit={handleSubmit} className='flex justify-center mt-10 gap-8 sm:flex-row flex-col'>
                <input type="text" placeholder="Add here your TODO's" className='border border-black rounded px-5 py-1 outline-none sm:w-96 w-54'/>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-blue-800 text-white px-4 py-1 rounded w-20'>Add</button>
                </div>
            </form>
            <TodoList/>
        </div>
    );
}

export default TodoBar;
