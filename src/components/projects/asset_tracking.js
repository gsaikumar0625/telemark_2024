import React from 'react'
import { Button, Carousel } from "@material-tailwind/react";
import Heading from '../Heading';
const AssetTracking = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'Our Projects', url: '/projects' }
];
  return (
    <>
     <Heading heading ={'Our Projects'} links={links} />  
      <div className='w-full h-56 flex justify-center'>
        <div className=" h-52 mx-auto flex flex-col justify-end text-center">
          <h1 className='text-primaryColor mb-3 font-extrabold' style={{ fontSize: 40 }}>Asset Tracking Solution</h1>
          <p className='text-secondaryColor font-bold mb-3'>How TelemeTrak Saved the Air Force Millions and Improved Safety</p>
        </div>
      </div>

      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div class="header font-semibold text-black col-span-12 g-white py-5 text-start mt-2">

              <div className='grid grid-cols-2 gap-[20px]'>

                <div className='pr-[10px] pl-5  py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-2 font-bold text-[22px]'>Challenge :</h1>
                  <h1 className='font-semibold'>

                    <div className='py-2 px-2'>
                      <ul className='text-[15px] leading-[1.6rem] text-justify'>
                        <li className='mb-2'>An Air Force maintenance squadron, responsible for maintaining 40 heavy transport
                          aircraft worth over $9 billion, faced a major challenge: missing tools.
                          When a tool went missing, a time-consuming manual search was required,
                          wasting valuable time and manpower. Even worse, missing tools posed a serious
                          safety risk, as Foreign Object Damage (FOD) could cause catastrophic damage to
                          aircraft and endanger lives.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='pr-[10px] pl-5  py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-2 font-bold text-[22px]'>Solution :</h1>
                  <h1 className='font-semibold'>

                    <div className='py-2 px-2'>
                      <ul className='text-[15px] leading-[1.6rem] text-justify'>
                        <li className='mb-2'>TelemeTrak implemented a solution that enabled Airmen to quickly and accurately
                          take inventory of their tool control kits
                          (CTKs) using TelemeTrak’s RFID tracking technology. This eliminated the need for manual
                          searches and significantly reduced the time spent waiting in line to sign out and return tools.</li>
                      </ul>
                    </div>
                  </h1>
                </div>

                <div className='pr-[10px] pl-5  py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-2 font-bold text-[22px]'>Results :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'><b className='font-bold text-secondaryColor'>Saved millions of dollars :</b> By reducing the time wasted on tool searches and wait times, TelemeTrak's solution saved the Air Force an estimated $74.6 million annually.</li>
                        <li className='mb-3'><b className='font-bold text-secondaryColor'>Improved safety :</b> The accurate tracking of tools helped to prevent FOD incidents, keeping Airmen and aircraft safe.
                        </li>
                        <li className='mb-2'><b className='font-bold text-secondaryColor'>Improved safety :</b> The accurate tracking of tools helped to prevent FOD incidents, keeping Airmen and aircraft safe.
                          Boosted morale: By freeing up time for Airmen to focus on their core tasks, TelemeTrak's solution improved job satisfaction and retention rates.
                        </li>
                      </ul>
                    </div>

                  </h1>
                </div>

                <div className='pr-[10px] pl-5  py-4 border border-solid border-primaryColor rounded-[10px]'>
                  <h1 className='text-secondaryColor mb-2 font-bold text-[22px]'>Impact :</h1>
                  <h1 className='font-semibold'>
                    <div className='py-2 px-8'>
                      <ul className='text-[15px] leading-[1.5rem]' style={{ listStyleType: 'circle' }}>
                        <li className='mb-3'>	The success of this case study at the particular squadron has the potential to be replicated across the entire Air Force. With over 5,000 aircraft and 1,000 CTKs, the Air Force could save millions of dollars and improve safety and morale by implementing TelemeTrak's solution.</li>
                        <li className='mb-2'> From the Air Force to your factory floor, track anything with pinpoint accuracy and military-grade security. Our versatile solution streamlines logistics, boosts manufacturing, and empowers service teams.</li>
                      </ul>
                    </div>
                  </h1>
                </div>
              </div>

              <div className='mt-5 pr-[10px] pl-5  py-4 border border-solid border-primaryColor rounded-[10px]'>
                <h1 className='text-secondaryColor mb-2 font-bold text-[22px]'>Call to Action :</h1>
                <h1 className='font-semibold'>
                  <div className='py-2 px-2'>
                    <ul className='text-[15px]'>
                      <li className='mb-2'> Contact TelemeTrak today to learn more about how we can help your organization achieve similar results.</li>
                    </ul>
                  </div>
                </h1>
              </div>

            </div>

          </div>
        </div>

      </div>


    </>

  )
}

export default AssetTracking