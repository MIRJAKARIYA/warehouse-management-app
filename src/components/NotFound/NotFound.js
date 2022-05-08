import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../../pageNotFound.jpg';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
            <img src={PageNotFound} className='block mx-auto mt-20' alt="" />
            </div>
            <button onClick={()=>navigate('/home')} className='px-4 py-2 font-semibold hover:bg-blue-700 duration-200 bg-blue-600 rounded-lg text-lg text-white block mx-auto mt-4'>Back To Home Page</button>
        </div>
    );
};

export default NotFound;