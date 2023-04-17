import React, { useState } from 'react';

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
                <div className='sm:w-16 sm:h-full sm:bg-blue-800 flex flex-col h-12 bg-transparent' >
                    <div className='sm:m-5 m-2 sm:p-0 h-full text-left p-3'>
                        <button className='text-white mb-3'  onClick={handleClick}>➕</button>
                        <div className='hidden text-white sm:flex sm:flex-col gap-2 text-center'>
                            <span>A</span>
                            <span>A</span>
                            <span>A</span>
                            <span>A</span>
                            <span>A</span>
                        </div>
                    </div>
                </div>
                ) : 
                (
                <div className='sm:w-48 sm:h-full sm:bg-blue-800 flex flex-col h-12 bg-transparent relative'>
                    <div className='sm:p-0 sm:m-5 sm:bg-blue-800 sm:h-full sm:w-fit text-left sm:relative absolute left-0 top-0 w-40 h-screen p-5 bg-black text-white'>
                        <button className='mb-3' onClick={handleClick}>❌</button>
                        <div className='flex flex-col gap-2'>
                            <span>Juegos</span>
                            <span>Juegos</span>
                            <span>Juegos</span>
                            <span>Juegos</span>
                            <span>Juegos</span>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
}

export default Navigation;
