import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='h-screen w-full flex items-center bg-slate-100'>
            <div className='flex shadow-lg m-auto lg:w-1/4'>
                <div className='bg-white p-6 w-full text-center h-fit'>
                    <h3 className=' text-3xl mb-10'>Create your account</h3>
                    <form className='flex flex-col gap-4'>
                        <input type="text" placeholder='Enter your name' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <input type="email" placeholder='Email' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <input type="password" placeholder='Password' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <input type="password" placeholder='Confirm your password' className='p-2 w-full bg-slate-300 outline-none border-none'/>
                        <div className='flex items-center flex-col gap-2'>
                            <Link className='block px-4 py-1 bg-blue-500 w-fit rounded text-white'>Sign Up</Link>
                            <Link to='/' className='text-sm text-gray-500'>Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
