import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Register = () => {
    const navigate = useNavigate();
    const [updateProfile] = useUpdateProfile(auth);
    const [passwordMatchError, setPassswordMatchError] = useState('');
    const [passwordError, setPasswordError] = useState('')

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const handleRegister = async e =>{
        e.preventDefault()
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value
        const password = e.target.pass.value;
        const conPassword = e.target.conPass.value;
        const name = fname + ' ' + lname;
        setPassswordMatchError('');
        setPasswordError('');
        if(password !== conPassword){
            setPassswordMatchError("*password did'nt match");
            return;
        }
        if(password.length < 6 || password.length>10){
            if(password.length<6){
                setPasswordError('*password is too short(pass>=6)');
                return;
            }
            else{
                setPasswordError('*password is very long(pass<=10)');
                return;
            }
        }
        const isExistsNumber = /^(?=.*[0-9])/.test(password);
        if(!isExistsNumber){
            setPasswordError('*password must have at least one number');
            return;
        }
        const isExistsSpecialCharacter = /^(?=.*[!@#$%^&*])/.test(password);
        if(!isExistsSpecialCharacter){
            setPasswordError('*password must have at least one special character');
            return;
        }
        const isExistsOneSmallLetter = /^(?=.*[a-z])/.test(password);
        if(!isExistsOneSmallLetter){
            setPasswordError('*password must have at least one small letter');
            return;
        }
        const isExistsOneUpperLetter = /^(?=.*[A-Z])/.test(password);
        if(!isExistsOneUpperLetter){
            setPasswordError('*password must have at least one upper case letter');
            return;
        }
        setPassswordMatchError('');
        setPasswordError('');
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName: name});
    }

    useEffect(()=>{
        if(user){
            console.log('login succcess')
            navigate('/home');
        }
    },[user,navigate]);

    return (
        <div className='register-container min-h-screen flow-root'>
           <div className='flex md:flex-row flex-col lg:w-[65%] mx-auto items-center mt-[120px]'>
           <div className='md:w-1/2 w-full p-4'>
                <form onSubmit={handleRegister} className='w-full max-w-[450px] mx-auto p-6 rounded-2xl form-style'>
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
                    <small className='text-red-700'>{passwordError}</small> 
                    <div className='mt-5'>
                        <p className='mb-2 pl-3'>Confirm Password:</p>
                        <input className='border-[1px] border-black w-full h-[50px] rounded-xl reg-input-style' placeholder='Confirm password' name='conPass' type="password" />
                    </div>
                    <small className='text-red-700'>{passwordMatchError}</small>
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