import React from 'react';
import banner from '../../image/banner.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center  w-11/12 mx-auto mt-[6.5rem]'>
            <div className='banner-left flex  items-center w-[50%]'>
                <div>
                    <h1 className=' banner-tittle'> We Are GoalDah  <span className='text-[#3334a0]'>Young Star</span></h1>
                    <p>united we stand devided we fall</p>
                </div>
                <h1>this is from sumon</h1>
            </div>
            <div className='banner-right w-[50%]'>
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;