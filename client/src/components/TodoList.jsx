import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../context/TasksContext';

const TodoList = () => {
    const { tasks, setTasks, tasksRemoved, setTasksRemoved } = useContext(TasksContext)
    useEffect(() => {
        const getTodos = async () => {

        }
        getTodos()
    }, [])
    const remove = (item, task) => {
        const listRemove = tasks.filter((list, index) => index !== item)
        setTasks(listRemove)
        setTasksRemoved([...tasksRemoved, task])
    }
    const handleCompleted = (elem) => {
        setTasks(tasks.map((task, index) => {
            if(elem == index){
                return{...task, completed: !task.completed}
            }
            return task
        }))
    }

    const handleProgress = (elem) => {
        setTasks(tasks.map((task, index) => {
            if(elem == index){
                return{...task, inProgress: !task.inProgress}
            }
            return task
        }))
    }

    return (
        <div className=' mt-6 w-full h-fit border-black'>
            {tasks.length ? 
                (

                    tasks.map((task, index) => (
                        <div className='border-b border-black flex items-center pt-2 pb-2 lg:flex-row flex-col' key={index}>
                            <p className=' text-base text-center lg:w-2/5'>{task.todo}</p>
                            <div className='flex gap-2 lg:flex-row flex-col lg:w-full justify-center'>
                                <div className='flex gap-2 items-center '>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>Completed</label>
                                        <input type="checkbox" onChange={() => handleCompleted(index)} checked={task.completed ? true : false} />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>In Progress</label>
                                        <input type="checkbox" onChange={() => handleProgress(index)} checked={task.inProgress ? true : false}/>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='text-base border  text-white bg-red-700 rounded pl-2 pr-2 h-fit' onClick={ () => remove(index, task)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : 
                <p className='text-center border-b border-black pb-4 text-lg'>Empty</p>
                }
        </div>
    );
}

export default TodoList;
