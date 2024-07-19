import React from 'react'
import FooterfbIcon from '../../assests/footer_fb.svg';
import footerInIcon from '../../assests/footer_in.svg';

const Footer = () => {
  return (
    <div className='w-full sm:flex-col'>
<div className="md:flex mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-1 justify-center">
         <div class="flex-col md:w-40 flex-grow px-12 py-6">
          <div className='conatct-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Contact Us</h5>
          <p className='text-secondaryColor font-medium'>Phone: 561.286.7212</p>
          </div>
          <div className='sales-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Sales Department</h5>
          <p className='text-secondaryColor font-medium'>sales@lifefamilyfarms.com</p>
          </div>
          <div className='account-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Accounting Department</h5>
          <p className='text-secondaryColor font-medium'>accounting@lifefamilyfarms.com</p>
          </div>
          <div className='procurment-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Procurement</h5>
          <p className='text-secondaryColor font-medium mb-12'>procurement@lifefamilyfarms.com</p>
          </div>
          <div className='mail-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Mailing Address</h5>
          <p className='text-secondaryColor font-medium'>PO Box 667353</p>
          <p className='text-secondaryColor font-medium'>Pompano Beach,</p>
          <p className='text-secondaryColor font-medium'>FL 33066-7353</p>
          </div> 
        </div>
        <div class="w-full md:w-40 flex-grow  px-12 py-6">
        <div className='mail-info'>
          <h5 className='text-primaryColor font-semibold mb-2 mt-2'>Sales Office - Cooler</h5>
          <p className='text-secondaryColor font-medium'>PO Box 667353</p>
          <p className='text-secondaryColor font-medium'>Pompano Beach,</p>
          <p className='text-secondaryColor font-medium mb-12'>FL 33066-7353</p>
        </div>
        <div className='social-media'>
          <h5 className='text-primaryColor font-bold mb-2 mt-2'>Social Media</h5>
           <div className='flex gap-2'>
           <img src={FooterfbIcon} className='w-8'/>
           <img src={footerInIcon} className='w-8'/>
            </div>
        </div> 
        </div>
        <div class="w-full md:w-20 flex-grow px-12 py-6">
        <h5 className='text-primaryColor font-bold mb-2 mt-2'>Navigation</h5> 
          <div className='flex-col pb-2'>
           <a href="/" className="text-primaryColor font-semibold hover:text-secondaryColor">Home</a>
          </div>
          <div className='flex-col pb-2'>
            <a href="/about" className="text-primaryColor font-semibold hover:text-secondaryColor">About Us</a>
          </div> 
          <div className='flex-col pb-2'>
            <a href="/project" className="text-primaryColor font-semibold hover:text-secondaryColor">Projects</a>
          </div> 
          <div className='flex-col pb--2'>
            <a href="/contact" className="text-primaryColor font-semibold hover:text-secondaryColor">Contact us</a>
          </div> 
        </div>
        </div> 

        <div className='w-full bg-primaryColor text-white' style={{position:'relative',bottom:0,height:60,textAlign:'center',paddingTop:10}}>
                <div className='mx-auto' style={{ maxWidth: 940}}>
                   <p style={{margin:0}}>© TelemeTrak,Inc. All rights reserved.</p>

                </div>
            </div>
    </div>
  )
}

export default Footer