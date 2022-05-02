import React from 'react';
import './BannerComponent.css';
const BannerComponent = ({image,Des}) => {
    return (
        <div className='banner-component-style p-2 md:p-8 flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 h-full'>
                <img src={image} alt="" className='w-full h-full object-cover rounded-lg banner-img-style' />
            </div>
            <div className='md:w-1/2 md:ml-10'>
                <h1 className='text-left text-2xl mt-3 md:mt-0 md:text-5xl font-bold'>{Des?.title}</h1>
                <p className='text-left text-sm md:text-lg md:mt-5'>{Des?.des}</p>
            </div>
        </div>
    );
};

export default BannerComponent;