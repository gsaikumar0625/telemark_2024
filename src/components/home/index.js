import React, { useEffect, useRef } from 'react';
import { Carousel } from "@material-tailwind/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slide1 from '../../assests/20230608_112306[68].jpg';
import Slide2 from '../../assests/20230608_113457[81].jpg';
import Slide3 from '../../assests/HC-130J.jpeg';
import Slide4 from '../../assests/pixabay solar-2666770.jpg';
import Slide5 from '../../assests/20230608_112613[65].jpg';
import Slide6 from '../../assests/20230608_113454[35].jpg';
import Slide7 from '../../assests/airforce-airlift-special-mission-aircraft-maintenance-m.jpg';

const Home = (elem, direction = 1) => {
  if (!elem) return; // Check if elem is defined

  gsap.registerPlugin(ScrollTrigger);

  let x = 0, y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromTop")) {
    y = 0;
    y = -100;
  } else if (elem.classList.contains("gs_reveal_fromBottom")) {
    x = -100;
    x = 0;
  }

  const mainHeading = document.querySelector('.gs_zoom_in');

  function animateScale(elem) {
    gsap.fromTo(elem, {
      x: '0%',
      opacity: 0,
      scale: 0,
      
    }, {
      duration: 2,
      scale: 1,
      opacity: 1,
      ease: 'power3.out',
      yoyo: true,
      overwrite: "auto"
    });
  }

  // Check if the element exists before creating ScrollTrigger
  if (mainHeading) {
    ScrollTrigger.create({
      trigger: mainHeading,
      markers: false,
      onEnter: function () {
        animateScale(mainHeading);
      },
      onEnterBack: function () {
        animateScale(mainHeading);
      },
    });
  }


  elem.style.transform = `translate(${x}px, ${y}px)`;
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x, y, opacity: 0, autoAlpha: 0 }, {
    duration: 1.5,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: 'power3.out',
    yoyo: true,
    overwrite: "auto"
  });
}

const hide = (elem) => {
  if (!elem) return; // Check if elem is defined

  gsap.set(elem, { autoAlpha: 0 });
}
const HomeComponent = () => {

  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => Home(elem),
        onEnterBack: () => Home(elem, -1),
        onLeave: () => hide(elem),
      });
    });
  }, []);

  const pulseRef = useRef(null);

  useEffect(() => {
    const pulseAnimation = gsap.fromTo(
      pulseRef.current,
      {
        scale: 1,
        opacity: 1,
      },
      {
        scale: 1.05,
        opacity: 0.8,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    return () => {
      pulseAnimation.kill();
    };
  }, []);


  return (
    <>
      <div className="home-section">
        <div className="overlay"></div>
        <h4 className='heading text-white gs_reveal gs_reveal_fromBottom'>Continuous tracking for unpowered logistics assets</h4>
        <p className='z-[1] text-white font-semibold w-[70%] mt-8 text-[24px] leading-[37px] gs_reveal gs_reveal_fromTop'>
          Stop wasting energy and money. Join the TelemeTrak revolution and experience <br /> the power of a smarter, more efficient solar system.</p>
      </div>

      <div className="gs_zoom_in mx-auto md:max-w-7xl xl:max-w-screen-xl px-12 lg:px-32 p-1 flex justify-center">
        <div>
          <h1 class="text-primaryColor my-12 font-extrabold animate__animated animate__slideInDown" style={{ fontSize: 40 }}>Our Expertise</h1>
        </div>
      </div>


      <div class="flex-col w-full md:flex-row mx-auto p-1 flex justify-center container-fluid about overflow-hidden py-5">
        <div class="container py-5">
          <div class="sm:flex gap-4 row g-5">
            <div class="sm:w-1/2 col-xl-6 wow fadeInLeft" data-wow-delay="0.2s"  >
              <div class="about-img rounded h-100">
                <img src={Slide1} class="img-fluid rounded" alt="" />
                  <div class="about-exp"><span>20 Years Experiance</span></div>
              </div>
            </div>
            <div class="col-xl-6 sm:w-1/2 wow fadeInRight" data-wow-delay="0.2s">
              <div class="about-item">
                <h4 class="text-primary text-uppercase">About Us</h4>
                <h1 class="display-3 mb-3">We Deliver The Quality Water.</h1>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis unde a aperiam nulla voluptatibus excepturi ipsam iusto consequuntur
                </p>
                <div class="bg-light rounded p-4 mb-4">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex">
                        <div class="pe-4">
                          <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width:'80px',height:'80px'}}><i class="fas fa-tint text-white fa-2x"></i></div>
                        </div>
                        <div class="">
                          <a href="#" class="h4 d-inline-block mb-3">Satisfied Customer</a>
                          <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-light rounded p-4 mb-4">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex">
                        <div class="pe-4">
                          <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width:'80px',height:'80px'}}><i class="fas fa-faucet text-white fa-2x"></i></div>
                        </div>
                        <div class="">
                          <a href="#" class="h4 d-inline-block mb-3">Standard Product</a>
                          <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" class="btn btn-secondary rounded-pill py-3 px-5">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="flex-col w-full md:flex-row mx-auto md:max-w-7xl xl:max-w-screen-xl
         px-12 lg:px-32 p-1 flex justify-center">
        <div className="sm:flex gap-4">
          <div className='sm:w-1/2 gs_reveal gs_reveal_fromLeft'>
            <Carousel>
              <img
                src={Slide1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={Slide2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={Slide3}
                alt="image 3"
                className="h-full w-full object-cover"
              />

              <img
                src={Slide4}
                alt="image 4"
                className="h-full w-full object-cover"
              />

              {/* <img
                src={Slide5}
                alt="image 5"
                className="h-full w-full object-cover"
              />

              <img
                src={Slide6}
                alt="image 6"
                className="h-full w-full object-cover"
              />

              <img
                src={Slide7}
                alt="image 7"
                className="h-full w-full object-cover"
              /> */}
            </Carousel>
          </div>

          <div className='sm:w-1/2'>

            <div className='shadow-custom gs_reveal gs_reveal_fromTop px-3 py-4'>
              <p className='text-primaryColor text-2xl pb-2 font-bold'>Solar Optimization</p>
              <p className='whitespace-normal font-medium'>Optimize Your Solar with TelemeTrak's Innovative
                Buffering Technology...</p>
              <a href='./solar_optimization'>
                <div className='mt-4 underline text-lg 
               font-semibold text-secondaryColor '>Continue Reading</div> </a>
            </div>

            <div className='shadow-custom px-3 py-4 mt-2 gs_reveal gs_reveal_fromBottom'>
              <p className='text-primaryColor text-2xl pb-2 font-bold'>Asset Tracking</p>
              <p className='whitespace-normal font-medium'>Optimize Your Solar with TelemeTrak's Innovative Buffering
                Technology...</p>
              <a href='./asset_tracking'>
                <div className='mt-4 underline text-lg 
               font-semibold text-secondaryColor'>Continue Reading</div>
              </a>

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default HomeComponent