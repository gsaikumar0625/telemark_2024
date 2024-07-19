import React from 'react';
import fbIcon from '../../assests/fb_logo.svg';
import InIcon from '../../assests/in_logo.svg';

const TopBar = () => {
    return (
        <div className='max-w-full bg-primaryColor'>
        <div className="mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-3 flex justify-end">
          <div className="flex gap-4 items-center">
            <p className='text-white font-semibold'>Contact us: 561.286.7212</p>
            <img src={fbIcon} className='w-6' alt='fb'/>
            <img src={InIcon} className='w-6' alt='fb'/>
          </div>
        </div>
      </div>
    );
}

export default TopBar;