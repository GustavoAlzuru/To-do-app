import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
            {
                toggle ?
                    (
                        <div className='sm:w-16 sm:h-full sm:bg-blue-800 flex flex-col h-12 bg-slate-100' >
                            <div className='sm:m-5 m-2 sm:p-0 h-full text-left p-3'>
                                <button className='text-white mb-3' onClick={handleClick}>➕</button>
                                <div className='hidden text-white sm:flex sm:flex-col gap-2 text-center'>
                                    <Link to='/'>A</Link>
                                    <Link to='/todos/completed'>C</Link>
                                    <Link to='/todos/in-progress'>I</Link>
                                    <Link to='/todos/removed'>R</Link>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='sm:w-44 sm:h-full sm:bg-blue-800 flex flex-col h-12 bg-slate-100 relative'>
                            <div className='sm:p-0 sm:m-5 sm:bg-blue-800 sm:h-full sm:w-fit text-left sm:relative absolute left-0 top-0 w-40 h-screen p-5 bg-black text-white'>
                                <button className='mb-3' onClick={handleClick}>❌</button>
                                <div className='flex flex-col gap-2'>
                                    <Link to='/'>All To DO's</Link>
                                    <Link to='/todos/completed'>Completed</Link>
                                    <Link to='/todos/in-progress'>In Progress</Link>
                                    <Link to='/todos/removed'>Removed</Link>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    );
}

export default Navigation;
