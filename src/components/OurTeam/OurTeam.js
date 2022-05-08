import React from 'react';
import Fahim from '../../our-team-images/fahim.jpg';
import Ragib from '../../our-team-images/ragib.jpg';
import Jahid from '../../our-team-images/jahid.jpg';
import Jakariya from '../../our-team-images/jakariya.jpg';
import Imtiaz from '../../our-team-images/imtiaz.jpg';
import Saddam from '../../our-team-images/saddam.jpg';
import './OurTeam.css';
import { AiOutlineTwitter, AiOutlineGooglePlus } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';




const OurTeam = () => {
    return (
        <>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Jakariya} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 text-center text-xl name-style font-semibold'>Mir Jakariya</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>Founder and CEO</p>
                <p className='text-center w-3/4 mx-auto'>I am Mir Jakariya and I am the CEO of this company.I got my degree from Daffodil International University in EEE.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 border-blue-500 w-[50px] hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 text-red-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 w-[50px] h-[50px] hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Ragib} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 text-center font-semibold text-xl name-style'>Ragib Siddik</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>HR head</p>
                <p className='text-center w-3/4 mx-auto'>Hello there! My name is Ragib Siddik and I have a degree in EEE.Currently I am working in this company as HR head.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 border-blue-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 w-[50px] h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 text-red-500 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 w-[50px] h-[50px] hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Imtiaz} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 text-center font-semibold text-xl name-style'>Imtiaz Ahmed</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>Senior Developer</p>
                <p className='text-center w-3/4 mx-auto'>Hi I am Imtiaz Ahmed and I am working in this company as Senior developer and i love my job very much.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-blue-500 w-[50px] h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-red-500 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Fahim} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 text-center font-semibold text-xl name-style'>Fahim Faysal</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>Backend Developer</p>
                <p className='text-center w-3/4 mx-auto'>I love doing chalanging works.I have worked on many chalanging projects after joining this company and  I love it.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-blue-500 w-[50px] h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-red-500 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Jahid} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 text-center font-semibold text-xl name-style'>Jhahid Hasan</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>Junior Developer</p>
                <p className='text-center w-3/4 mx-auto'>I Joined this company as Junior developer this year and currently working full time and I love my job.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-blue-500 w-[50px] h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-red-500 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
            <div className='text-white max-w-[400px]'>
            <div className='flex justify-center'>
                <div className='p-3 border-2 border-cyan-600 w-[180px] h-[180px] rounded-full flex justify-center items-center'>
                    <img src={Saddam} className="w-[150px] h-[150px] rounded-full" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-cyan-500 font-semibold text-center text-xl name-style'>Saddam Mahmud</h1>
                <p className='text-center font-semibold text-yellow-600 mt-1'>Junior Developer</p>
                <p className='text-center w-3/4 mx-auto'>I got hired in this company after graduation in CSE and currently I am working with so much talented people.</p>
                <div className='flex justify-center mt-2'>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 border-blue-500 w-[50px] h-[50px] text-4xl flex justify-center items-center rounded-full text-blue-500'>
                        <AiOutlineGooglePlus></AiOutlineGooglePlus>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 text-red-500 border-red-500 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full ml-3'>
                        <FaFacebookF></FaFacebookF>
                    </p>
                    <p style={{cursor:'pointer'}} className='border-2 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 duration-200 w-[50px] h-[50px] text-3xl flex justify-center items-center rounded-full text-cyan-500 border-cyan-500 ml-3'>
                        <AiOutlineTwitter></AiOutlineTwitter>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default OurTeam;