import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../context/TasksContext';
import {getTodos, isComplete, removeTodo} from '../services/tasks';

const TodoList = () => {
    const { tasks, setTasks } = useContext(TasksContext)
    useEffect(() => {
        const getData = async () => {
           const data = await getTodos()
           setTasks(data)
        }
        getData()
    }, [])
    const handleRemove = (id) => {
        removeTodo(id)
        setTasks(tasks.filter((task) => task._id !== id))
    }
    const handleCompleted = (element) => {
        setTasks(tasks.map((task) => {
            if(task._id === element._id){
                return{...task, completed: !task.completed}
            }
            return task
        }))
        const newEl = element
        newEl.completed = !newEl.completed
        isComplete(element._id, newEl)
    }


    return (
        <div className=' mt-6 w-full h-fit border-black'>
            {tasks.length ? 
                (

                    tasks.map((task) => (
                        <div className='border-b border-black flex items-center pt-2 pb-2 lg:flex-row flex-col' key={task._id}>
                            <p className=' text-base text-center lg:w-2/5'>{task.todo}</p>
                            <div className='flex gap-2 lg:flex-row flex-col lg:w-full justify-center'>
                                <div className='flex gap-2 items-center '>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>Completed</label>
                                        <input type="checkbox"  onChange={() => handleCompleted(task)} checked={task.completed ? true : false}/>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>In Progress</label>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='text-base border  text-white bg-red-700 rounded pl-2 pr-2 h-fit' onClick={() => handleRemove(task._id)}>Remove</button>
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

    // const remove = (item, task) => {
    //     const listRemove = tasks.filter((list, index) => index !== item)
    //     setTasks(listRemove)
    //     setTasksRemoved([...tasksRemoved, task])
    // }
    // const handleCompleted = (elem) => {
    //     setTasks(tasks.map((task, index) => {
    //         if(elem == index){
    //             return{...task, completed: !task.completed}
    //         }
    //         return task
    //     }))
    // }

    // const handleProgress = (elem) => {
    //     setTasks(tasks.map((task, index) => {
    //         if(elem == index){
    //             return{...task, inProgress: !task.inProgress}
    //         }
    //         return task
    //     }))
    // }
