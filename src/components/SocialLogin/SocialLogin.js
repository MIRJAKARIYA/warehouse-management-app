import React from 'react';
import FaceBook from '../../social images/fb.png';
import Google from '../../social images/google.png';
import Github from '../../social images/github.png';
import { useLocation } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const SocialLogin = () => {
    const location = useLocation();
    return (
        <div>
            <h1 className='text-4xl mb-7 text-white underline text-center font-semibold'>Or {location.pathname.includes('/login')?'Sign In':'Sign Up'} Using</h1>
            <div>
                <div className='mx-auto bg-blue-200 max-w-[285px] rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
     
                        <FcGoogle className='text-[40px]'></FcGoogle>
                    </div>
                    <div>
                        <p className='text-[17px] font-bold pr-6'>{location.pathname.includes('/login')?'SIGN IN':'SIGN UP'} WITH GOOGLE</p>
                    </div>
                </div>
                <div className='mx-auto mt-4 bg-blue-200 max-w-[285px] rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
                        {/* <img src={Github} className='w-12' alt="" /> */}
                        <BsGithub className='text-[40px] text-black'></BsGithub>
                    </div>
                    <div>
                        <p className='text-[17px] font-bold pr-6'>{location.pathname.includes('/login')?'SIGN IN':'SIGN UP'} WITH GITHUB</p>
                    </div>
                </div>
                <div className='mx-auto mt-4 bg- max-w-[285px] bg-blue-200 rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
                        {/* <img src={FaceBook} className='w-12' alt="" /> */}
                        <BsFacebook className='text-[40px] text-blue-800'></BsFacebook>
                    </div>
                    <div>
                        <p className='text-[17px] font-bold'>{location.pathname.includes('/login')?'SIGN IN':'SIGN UP'} WITH FACEBOOK</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SocialLogin;