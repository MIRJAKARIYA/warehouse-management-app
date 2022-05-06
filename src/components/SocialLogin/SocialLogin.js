import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    useEffect(()=>{
        if(user1 || user2 || user3){
            navigate(from, { replace:true });
        }
    },[from,navigate,user1,user2,user3]);
    return (
        <div>
            <h1 className='text-4xl mb-7 text-white underline text-center font-semibold'>Or {location.pathname.includes('/login')?'Sign In':'Sign Up'} Using</h1>
            <div>
                <div onClick={()=>signInWithGoogle()} className='mx-auto bg-blue-200 max-w-[285px] rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
                        <FcGoogle className='text-[40px]'></FcGoogle>
                    </div>
                    <div>
                        <p className='text-[17px] font-bold pr-6'>{location.pathname.includes('/login')?'SIGN IN':'SIGN UP'} WITH GOOGLE</p>
                    </div>
                </div>
                <div onClick={()=>signInWithGithub()} className='mx-auto mt-4 bg-blue-200 max-w-[285px] rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
                        <BsGithub className='text-[40px] text-black'></BsGithub>
                    </div>
                    <div>
                        <p className='text-[17px] font-bold pr-6'>{location.pathname.includes('/login')?'SIGN IN':'SIGN UP'} WITH GITHUB</p>
                    </div>
                </div>
                <div onClick={()=>signInWithFacebook()} className='mx-auto mt-4 bg- max-w-[285px] bg-blue-200 rounded-xl flex justify-between items-center px-3 py-2' style={{cursor:'pointer'}}>
                    <div>
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