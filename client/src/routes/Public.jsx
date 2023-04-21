import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Completed from '../pages/Completed';
import InProgress from '../pages/InProgress';
import NotFound from '../pages/NotFound';
import Removed from '../pages/Removed';

const Public = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/todos/completed' element={<Completed/>}/>
                <Route path='/todos/in-progress' element={<InProgress/>}/>
                <Route path='/todos/removed' element={<Removed/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    );
}

export default Public;
