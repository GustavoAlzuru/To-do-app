import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        const getTodos = async () => {
            const data = await fetch('http://localhost:3000/todos')
            const res = await data.json()
            console.log(res)
            setList(res)
        }
        getTodos()
    }, [])
    const remove = (item) => {
        const listRemove = list.filter((list, index) => index !== item)
        setList(listRemove)
    }
    return (
        <div className=' mt-6 w-full h-fit border-black'>
            {list.length ? 
                (

                    list.map((list, index) => (
                        <div className='border-b border-black flex items-center pt-2 pb-2 lg:flex-row flex-col' key={index}>
                            <p className=' text-base text-center lg:w-2/5'>{list.todo}</p>
                            <div className='flex gap-2 lg:flex-row flex-col lg:w-full justify-center'>
                                <div className='flex gap-2 items-center '>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>Completed</label>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <label className='text-base'>In Progress</label>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='text-base border  text-white bg-red-700 rounded pl-2 pr-2 h-fit' onClick={ () => remove(index)}>Remove</button>
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
