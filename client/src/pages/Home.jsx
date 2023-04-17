import React from 'react';
import TodoBar from '../components/TodoBar';

const Home = () => {
    return (
        <div className='sm:h-full h-[calc(100%-3rem)] w-full py-6'>
            <div className=" w-10/12 mx-auto p-8 border border-black h-full overflow-y-scroll">
                <h2 className='text-3xl'>Welcome, Your Name</h2>
                <TodoBar/>
            </div>
        </div>
    );
}

export default Home;
