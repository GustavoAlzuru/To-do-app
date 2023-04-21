import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-screen w-full flex items-center bg-slate-100'>
            <div className='flex shadow-md shadow-neutral-950 lg:w-2/5  h-96 m-auto sm:w-2/3'>
                <div className='bg-white p-6 sm:w-3/5 w-full text-center h-full'>
                    <h3 className=' text-3xl mb-10'>Sign in to Acount</h3>
                    <form className='flex flex-col gap-4 h-full'>
                        <input type="email" placeholder='Email' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <input type="password" placeholder='Password' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <p>Forgot your password?</p>
                        <div className='flex justify-end items-center flex-col gap-2'>
                            <button type='submit' className='px-4 py-1 bg-blue-500 w-fit rounded text-white'>Log in</button>
                            <Link to='/login' className='sm:hidden block px-4 py-1 bg-blue-500 w-fit rounded text-white'>Sign Up</Link>
                        </div>
                    </form>
                </div>
                <div className='hidden sm:flex justify-center items-center bg-blue-600 text-white flex-col p-6 sm:w-2/5 '>
                    <h3 className='text-2xl mb-2 text-center'>Hello, Friend!</h3>
                    <p className='text-center'>Fill up personal information and start tracking your to do's</p>
                    <Link className='px-4 py-1 bg-white w-fit rounded  text-black mt-3' to='/login'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
