import React from 'react';
import LoadImage from '../../loading-image/loading-image.gif'
const Loading = () => {
    return (
        <div className='mt-80'>
            <img src={LoadImage} alt="" className='mx-auto w-20'/>
        </div>
    );
};

export default Loading;