import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    return (
        <div className='register-container min-h-screen flow-root'>
           <div className='flex md:flex-row flex-col lg:w-[65%] mx-auto items-center mt-[120px]'>
           <div className='md:w-1/2 w-full p-4'>
                <form className='w-full max-w-[450px] mx-auto p-6 rounded-2xl form-style'>
                    <div>
                        <p className='mb-2 pl-3'>First Name:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' name='fname' placeholder='First name' type="text" />
                    </div> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Last Name:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Last name' name='lname' type="text" />
                    </div> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Email:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Email' name='email' type="email" />
                    </div> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Password:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Password' name='pass' type="password" />
                    </div> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Confirm Password:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Confirm password' name='conPass' type="password" />
                    </div>
                    <button type='submit' className='w-[60%] block mx-auto mt-6 py-2 rounded-md text-lg font-bold bg-yellow-700'>Register</button> 
                </form>
                <Link to='/login' className='text-white block text-center mt-2 underline'>already have an account?Please sign in</Link>
            </div>
            <div className='md:w-1/2 w-full'>
                <SocialLogin></SocialLogin>
            </div>
            
           </div>
           
        </div>
    );
};

export default Register;