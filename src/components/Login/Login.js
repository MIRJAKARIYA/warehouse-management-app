import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import { RiEyeCloseLine, RiEyeFill } from 'react-icons/ri';
import useToken from '../../hooks/useJwtToken';


const Login = () => {
    const [passShown, setPassShown] = useState(false)
    let location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef('');
    let from = location.state?.from?.pathname || "/";
    const [resetError, setResetError] = useState(false)
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
        auth
      );
      const [token] = useToken(user?.user?.email);

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.pass.value;
        signInWithEmailAndPassword(email, password);   
    }

    const handleForgotPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        setResetError(true);
    }
    useEffect(()=>{
        if(ResetError && resetError){
            console.log(ResetError?.message)
            if(ResetError?.message.includes('user-not-found')){
                toast('User not found 🙁');
            }
            else if(ResetError?.message.includes('missing-email')){
                toast('Missing email address 🙁');
            }
            else{
                toast(ResetError?.message);
            }
            setResetError(false);
        }
        else if(!ResetError && resetError){
            toast('reset email has been sent 🙂');
            setResetError(false);
        }
    },[ResetError,resetError])
    console.log(error)


    useEffect(()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[navigate,from,user]);

    return (
        <div className='register-container min-h-screen flow-root'>
           <div className='flex md:flex-row flex-col lg:w-[65%] mx-auto items-center mt-[200px]'>
           <div className='md:w-1/2 w-full p-4'>
                <form onSubmit={handleLogin} className='w-full max-w-[450px] mx-auto p-6 rounded-2xl form-style'>
                    <div>
                        <p className='mb-2 pl-3'>Email:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Email' ref={emailRef} name='email' type="email" required />
                    </div>
                    <small className='text-red-700 ml-2'>{error?.message?.includes('not-found')?'*user not found':''}</small>
                    <div className='mt-5 relative'>
                        <p className='mb-2 pl-3'>Password:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Password' name='pass' type={passShown?'text':'password'} required />
                        <button type='button' onClick={()=>setPassShown(!passShown)} className='absolute text-2xl top-[55%] left-[89%] text-slate-500'>{passShown?<RiEyeFill></RiEyeFill>:<RiEyeCloseLine></RiEyeCloseLine>}</button>
                    </div>
                    <small className='text-red-700 ml-2'>{error?.message?.includes('password')?'*wrong password':''}</small>
                    <div className='text-right mt-1 pr-3'>
                        <small onClick={handleForgotPassword} className='underline hover:text-blue-600' style={{cursor:'pointer'}}>forgot password?</small> 
                    </div>
                    <button type='submit' className='w-[60%] block mx-auto mt-6 py-2 rounded-md text-lg font-bold bg-yellow-700'>LOGIN</button> 
                </form>
                <Link to='/register' className='text-white block text-center mt-2 underline'>new to the website?Please sign up</Link>
            </div>
            <div className='md:w-1/2 w-full'>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
           </div>
        </div>
    );
};

export default Login;