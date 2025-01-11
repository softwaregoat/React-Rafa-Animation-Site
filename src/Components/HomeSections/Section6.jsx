import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
// COMPONENTS
import HorizontalMarquee from '../HorizontalMarquee/HorizontalMarquee'

const Section6 = () => {

    // FIND VALUE
    const ParaGraph = useRef()

    // GSAP
    useGSAP(() => {
        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara = '';
        let Paragraph = ParaGraph.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = Paragraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara += `<span style="display: inline-block;" id="Sec6TextAppear">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara += ' '; // Simple space between words
            }
        }

        ParaGraph.current.innerHTML = NewPara;
        // SET INITIAL VALUE
        gsap.set("#Sec6TextAppear", {
            opacity: 0, x: 50, rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to('#Sec6TextAppear', {
            opacity: 1,
            x: 0,
            delay: 1,
            rotationX: 0,
            duration: 0.8,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                scroller: '.container',
                trigger: "#Section6",
                toggleActions: "restart none none none",
                start: "top 40%",
            }
        }
        );
    })


    // TEXT ANIMATION
    useGSAP(() => {
        gsap.fromTo(".ClubHouse > h1:nth-child(1)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#Section6",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".ClubHouse > h1:nth-child(2)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#Section6",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".ClubHouse > h1:nth-child(3)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#Section6",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".ClubHouse > h1:nth-child(4)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                ease: "power1.inOut",
                delay: 0.5,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#Section6",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });
    })
    return (
        <>
            <div id='Section6' className='py-[120px] bg-[#0c0c0c] w-[100%] flex items-start ' >
                {/* CONTENT  */}
                <div className='flex flex-col gap- items pt-40 min-[1666px]:pt-60' >
                    <div className='flex md:px-40 px-5 md:py-10'>
                        <div className='w-[20%] z-10 '>
                            <h6 className='font-Titillium text-[#E72427]'>Coming soon</h6>
                            <span className='text-white text-6xl w-[50%] overflow-hidden'>
                                <div className="ClubHouse">
                                    Global
                                    <h1 className='text-white'>Global</h1>
                                    <h1 className='text-white'>Global </h1>
                                    <h1 className='text-white'>Global </h1>
                                    <h1 className='text-white'>Global </h1>
                                </div>
                            </span>
                            <span className='text-white text-6xl w-[50%] overflow-hidden'>
                                <div className="ClubHouse">
                                     ClubHouses
                                    <h1 className='text-white'> ClubHouses</h1>
                                    <h1 className='text-white'> ClubHouses</h1>
                                    <h1 className='text-white'> ClubHouses</h1>
                                    <h1 className='text-white'> ClubHouses</h1>
                                </div>
                            </span>
                            <div className='md:hidden my-5 text-start flex justify-start'>
                                <p ref={ParaGraph} className='w-[350px] text-[15px] text-white font-Titillium'>No matter where your home club is, you’re welcome at any of our locations.</p>
                            </div>
                        </div>
                        <div className='w-[50%] mt-20 text-start flex justify-start'>
                            <p ref={ParaGraph} className='w-[15%] text-[15px] text-white font-Titillium'>No matter where your home club is, you’re welcome at any of our locations.</p>
                        </div>
                    </div>
                    {/* MARQUEE */}
                    <HorizontalMarquee />
                </div>
            </div>
        </>
    )
}

export default Section6