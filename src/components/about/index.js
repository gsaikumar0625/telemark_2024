import React, { useEffect, useRef } from 'react';
import Heading from '../Heading';
import AboutImg from '../../../src/assests/about.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = (elem, direction = 1) => {
  if (!elem) return; // Check if elem is defined

  gsap.registerPlugin(ScrollTrigger);

  let x = 0, y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }else if(elem.classList.contains("gs_reveal_fromTop")){
    y = 0;
    y = -100;
  }else if(elem.classList.contains("gs_reveal_fromBottom")){
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

const AboutComponent = () => {
  const links = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' }
  ];

  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => About(elem),
        onEnterBack: () => About(elem, -1),
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
      <Heading heading={'About Us'} links={links} />
      <div className='w-full bg-white flex justify-center'>
        <div className="mx-auto flex flex-col justify-end">
          <div className="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
            <div className="font-semibold leading-[1.9rem] text-black col-span-12 g-white py-5 text-start mt-2">
              <section className="page-section" id="about">
                <div className="container">
                  <div className="text-center gs_zoom_in">
                    <h2 className="section-heading text-uppercase text-primaryColor font-extrabold ">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                  </div>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={AboutImg} alt="..." />
                      </div>
                      <div className="timeline-panel gs_reveal gs_reveal_fromLeft">
                        <div className="timeline-heading">
                          <h4>2009-2011</h4>
                          <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={AboutImg} alt="..." />
                      </div>
                      <div className="timeline-panel gs_reveal gs_reveal_fromRight">
                        <div className="timeline-heading">
                          <h4>March 2011</h4>
                          <h4 className="subheading">An Agency is Born</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={AboutImg} alt="..." />
                      </div>
                      <div className="timeline-panel gs_reveal gs_reveal_fromLeft">
                        <div className="timeline-heading">
                          <h4>December 2015</h4>
                          <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={AboutImg} alt="..." />
                      </div>
                      <div className="timeline-panel gs_reveal gs_reveal_fromRight">
                        <div className="timeline-heading">
                          <h4>July 2020</h4>
                          <h4 className="subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted pulse-element" ref={pulseRef}>
                      <div className="timeline-image">
                        <h4>
                          Be Part
                          <br />
                          Of Our
                          <br />
                          Story!
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
