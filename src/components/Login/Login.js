import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='register-container min-h-screen flow-root'>
           <div className='flex md:flex-row flex-col lg:w-[65%] mx-auto items-center mt-[200px]'>
           <div className='md:w-1/2 w-full p-4'>
                <form className='w-full max-w-[450px] mx-auto p-6 rounded-2xl form-style'>
                    <div>
                        <p className='mb-2 pl-3'>Email:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Email' name='email' type="email" />
                    </div> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Password:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Password' name='pass' type="password" />
                    </div> 
                    <button type='submit' className='w-[60%] block mx-auto mt-6 py-2 rounded-md text-lg font-bold bg-yellow-700'>LOGIN</button> 
                </form>
                <Link to='/register' className='text-white block text-center mt-2 underline'>new to the website?Please sign up</Link>
            </div>
            <div className='md:w-1/2 w-full'>
                <SocialLogin></SocialLogin>
            </div>
           </div>
        </div>
    );
};

export default Login;