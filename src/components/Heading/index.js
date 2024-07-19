import React, { useEffect } from 'react';
import HomeBanner from '../../../src/assests/home_banner_2.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Animation = (elem, direction = 1) => {
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

const Heading = ({ heading, links }) => {

    const hide = (elem) => {
        if (!elem) return; // Check if elem is defined

        gsap.set(elem, { autoAlpha: 0 });
    }

    useEffect(() => {
        gsap.utils.toArray(".gs_reveal").forEach((elem) => {
            hide(elem);

            ScrollTrigger.create({
                trigger: elem,
                markers: false,
                onEnter: () => Animation(elem),
                onEnterBack: () => Animation(elem, -1),
                onLeave: () => hide(elem),
            });
        });
    }, []);

   
    return (
        <div>
            <div className='w-full h-96 flex justify-center relative inset-0 bg-cover bg-center bg-no-repeat bg-fixed'
                style={{ backgroundImage: `url(${HomeBanner})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="h-64 mx-auto flex flex-col justify-end relative z-[1]">
                    <h1 className='text-white mb-3 font-extrabold gs_reveal gs_reveal_fromBottom' style={{ fontSize: 60 }}>
                        {heading}
                    </h1>
                    <div className='text-center gs_reveal gs_reveal_fromTop'>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.url} className="text-[1.1rem] font-medium 
                    text-white">{link.text}</a>
                                {index !== links.length - 1 &&
                                    <i className="far fa-circle text-white px-2"></i>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='w-full h-96 flex justify-center' style={{ backgroundImage: `url(${HomeBanner})`, 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center',
             backgroundAttachment: 'fixed' }}>
                <div className="h-80 mx-auto flex flex-col justify-end">
                    <h1 className='text-primaryColor mb-3 font-extrabold' style={{ fontSize: 60 }}>
                        {heading}
                    </h1>

                    <div className='text-center'>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.url} className="text-[1.1rem] font-medium 
                                text-primaryColor hover:text-secondaryColor">{link.text}</a>
                                {index !== links.length - 1 &&
                                    <i className="far fa-circle text-white px-2"></i>}
                            </React.Fragment>
                        ))}
                    </div>


                </div>
            </div> */}
        </div>
    );
}

export default Heading;