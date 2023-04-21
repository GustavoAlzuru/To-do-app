import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const Removed = () => {
    const {tasksRemoved} = useContext(TasksContext)
    return (
    <div className='sm:h-full h-[calc(100%-3rem)] w-full py-6 bg-slate-100'>
        <div className='w-10/12 mx-auto p-8 shadow-lg h-full overflow-y-scroll bg-white'>
            <h2 className='text-3xl text-center'>Tasks removed</h2>
            {tasksRemoved.map(removed => 
                <div className='border-b border-black pt-2 pb-2'>
                    <del><h3>{removed.todo}</h3></del>
                </div>
            )}
        </div>
    </div>
    );
}

export default Removed;
