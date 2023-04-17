import React, { useState } from 'react';

const TodoList = () => {
    const [list, setList] = useState([{
        todo: 'Wash clothes',
        completed: false,
        id: 1
    },
    {
        todo: 'Dry clothes',
        completed: false,
        id: 2
    },
    {
        todo: 'Eat',
        completed: false,
        id: 3
    },
    {
        todo: 'Prepare food',
        completed: false,
        id: 4
    }
])

    return (
        <div className=' mt-6 w-full h-fit border-black'>
            {list.length ? 
                (

                    list.map(list => (
                        <div className='border-b border-black flex items-center pt-2 pb-2 sm:flex-row flex-col'>
                            <span className='pl-5 text-xl w-1/2 text-center'>{list.todo}</span>
                            <div className='flex gap-2 text-xl w-1/2 justify-center sm:flex-row flex-col'>
                                <div className='flex gap-2 items-center justify-center'>
                                    <label htmlFor={list.id} className=' text-lg'>Completed</label>
                                    <input type="checkbox" id={list.id} />
                                </div>
                                <button className='text-base border  text-white bg-red-700 rounded pl-2 pr-2'>Remove</button>
                            </div>
                        </div>
                    ))
                ) : 
                <></>
                }
        </div>
    );
}

export default TodoList;
