import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const InProgress = () => {
    const {tasks} = useContext(TasksContext)

    return (
    <div className='sm:h-full h-[calc(100%-3rem)] w-full py-6 bg-slate-100'>
        <div className='w-10/12 mx-auto p-8 shadow-lg h-full overflow-y-scroll bg-white'>
            <h2 className='text-3xl text-center'>Tasks in progress</h2>
            {tasks.map(task => 
                task.inProgress && 
                <>
                    <h3 className='border-b border-black pt-6 pb-2 text-center'>{task.todo}</h3>
                </>
            )}
        </div>
    </div>
    );
}

export default InProgress;
