import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Register from '../pages/Register';
import Login from '../pages/Login';


const Auth = () => {
    return (
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
    );
}

export default Auth;
