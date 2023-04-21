import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Register from '../pages/Register';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';


const Auth = () => {
    return (
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
    );
}

export default Auth;
