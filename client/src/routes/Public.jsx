import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Completed from '../pages/Completed';
import InProgress from '../pages/InProgress';

const Public = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/todos/completed' element={<Completed/>}/>
                <Route path='/todos/in-progress' element={<InProgress/>}/>
            </Routes>
    );
}

export default Public;
