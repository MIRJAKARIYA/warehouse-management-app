import React from 'react';
import './BannerComponent.css';
const BannerComponent = ({image,Des}) => {
    return (
        <div className='banner-component-style p-8 flex flex-col md:flex-row items-center'>
            <div className='w-1/2 h-full'>
                <img src={image} alt="" className='w-full h-full object-cover rounded-lg banner-img-style' />
            </div>
            <div className='w-1/2 ml-10'>
                <h1 className='text-left text-5xl font-bold'>{Des?.title}</h1>
                <p className='text-left text-lg mt-5'>{Des?.des}</p>
            </div>
        </div>
    );
};

export default BannerComponent;