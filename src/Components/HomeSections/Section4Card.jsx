import React from 'react'
// GSAP 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// COMPONENTS
import VerticalMarquee from '../VerticalMarquee/VerticalMarquee';
// IMAGES 
import Card2Image1 from '../../assets/Vector (1).png'
import Card2Image2 from '../../assets/Vector.png'
import Card2Image3 from '../../assets/Vector (2).png'
import Card1Image1 from '../../assets/image (1).png'
import Card1Image2 from '../../assets/Vector (4).png'
import Card1Image3 from '../../assets/Vector (3).png'
import Card1Image4 from '../../assets/image.png'


const Section4Card = () => {
    // ZOOM UP IMAGE ANIMATION
    useGSAP(() => {
        gsap.to("#ZoomUpImage", {
            scale: 1,
            opacity: 1,
            duration: 1,
            // delay: 1,
            // stagger: 1,
            scrollTrigger: {
                scroller: '.container',
                trigger: ".section-05",
                start: "top 10%",
                toggleActions: "restart  none none none",
            }
        })
    }, [])


    // TEXT ANIMATION
    useGSAP(() => {
        gsap.fromTo(".Sec4CardHeading > h1:nth-child(1)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // This makes the animation reverse after each cycle
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#CardZoomUp",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".Sec4CardHeading > h1:nth-child(2)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.05,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#CardZoomUp",
                    toggleActions: "restart none none none",
                    start: "top 40%",
                }
            });

        gsap.fromTo(".Sec4CardHeading > h1:nth-child(3)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#CardZoomUp",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".Sec4CardHeading > h1:nth-child(4)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#CardZoomUp",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });
    })

    return (
        <>
        <div>
        <div id='exclusive' className="md:px-12 px-5 flex gap-10 pt-2 justify-start min-[1666px]:gap-20 min-[1360px]:px-24 min-[1440px]:px-28 min-[1666px]:py-14 [@media(max-width:780px)]:pt-[6rem]">
                {/* CARD 1 */}
                <div id='CardZoomUp' className='flex bg-[#ba2427] w-[30%]  max-[1359px]:py-7 min-[1360px]:py-7 max-[1360px]:w-[28.5%] min-[1440px]:py-5 min-[1440px]:w-[28.5%] min-[1666px]:py-12 min-[1666px]:w-[28%] max-[768px]:w-[100%]'>
                    {/* HEADING */}
                    <div className='w-[100%]'>
                        <div className=' ml-8 min-[1360px]:text-5xl w-[80%] text-5xl font-bold pb-10 text-white overflow-hidden '>
                            <div className="Sec4CardHeading-static">
                                
                                <h1 className='text-white leading-[3rem] font-thin max-[1200px]:text-[2rem] max-[1200px]:leading-[2rem]'> Exclusive </h1>

                                
                            </div>
                        </div>
                        <div className=' overflow-visible ml-8 border-solid border-b-[1px] border-[#d6d6d6] w-[80%] text-5xl font-bold pb-10 text-white -mt-[40px] overflow-hidden min-[1360px]:pb-5 min-[1440px]:pb-8'>
                            <div className="Sec4CardHeading-static">
                                <h1 className='text-white leading-[3rem] font-thin max-[1200px]:text-[2rem] max-[1200px]:leading-[2rem]'>  Experiences</h1>
                               
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}

                    <div id='ZoomUpImage' className='py-9 scale-[1]  h-[60%] flex  flex-col justify-center min-[1360px]:my-0 min-[1666px]:my-5 h-[30vh]'>
                        <div className=' flex items-end'>
                            <span>
                                <img className='w-[85%] min-[1666px]:w-[85%]' src={Card1Image3} alt="" />
                            </span>

                            <span className='flex justify-end'>
                                <img className='w-[95%] min-[1360px]:w-[85%] min-[1666px]:w-[90%]' src={Card1Image2} alt="" />
                            </span>
                        </div>
                        <div className='flex justify-between w-[100%] flex-start'>
                            <span className=' items-end ml-[72px] min-[1440px]:ml-[64px] min-[1666px]:ml-[72px]'>
                                <img className='w-[85%] min-[1666px]:w-[92%]' src={Card1Image1} alt="" />
                            </span>
                            <span className='flex justify-end items-end min-[1666px]:items-start'>
                                <img className='w-[85%] min-[1666px]:w-[78%]' src={Card1Image4} alt="" />
                            </span>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                      <p className='font-Titillium text-[0.8rem]  font-normal leading-[1.4rem] ml-8 w-[80%] border-solid border-t-[1px] border-[#d6d6d6] pt-10 text-white min-[1666px]:pt-7 text-[1rem] min-[1440px]:pt-7 min-[1360px]:pt-5 text-[1rem]'>From F1 events to members-only track days to exclusive tech talks, RAFA Racing Club memberships give you access to the kinds of experiences money can’t buy. </p>
                    </div>
                </div>
                {/* CARD 1 END */}
                {/* CARD 2 */}
                <div className=' bg-black w-[30%] min-[1360px]:py-5 max-[1360px]:w-[28.5%]   max-[1439px]:py-7 min-[1440px]:py-5 min-[1440px]:w-[28.5%] min-[1666px]:py-12 min-[1666px]:w-[28%]  max-[768px]:w-[100%]'>
                    {/* HEADING */}
                    <span>
                        <div className=' ml-8  w-[80%] text-5xl font-bold pb-10 text-white overflow-hidden'>
                            <div className="Sec4CardHeading-static" >
                                
                                <h1 className='text-white leading-[3rem] font-thin  max-[1200px]:text-[2rem] max-[1200px]:leading-[2rem]'> Fractional </h1>
                            
                            </div>
                        </div>
                        <div className=' ml-8 border-solid border-b-[1px] border-[#d6d6d6] w-[80%] text-5xl font-bold pb-10 text-white -mt-[40px] overflow-hidden min-[1360px]:pb-6 min-[1440px]:pb-8 overflow-visible'>
                            <div className="Sec4CardHeading-static">
                                
                                <h1 className='text-white leading-[3rem] font-thin  max-[1200px]:text-[2rem] max-[1200px]:leading-[2rem]'>  Ownership</h1>
                                
                            </div>
                        </div>
                    </span>
                    {/* IMAGE */}
                    <div id='ZoomUpImage' className='py-4 scale-[1] h-[279px]'>
                        <span className='flex items-end justify-end -mt-[120px] min-[1360px]:-mt-[100px] min-[1440px]:-mt-[120px] '>
                            <img className='w-[9%] max-[1665px]:w-[8%]' src={Card2Image3} alt="" />
                        </span>
                        <span className='flex justify-center'>
                            <img className='w-[82%]' src={Card2Image2} alt="" />
                        </span>
                        <span className='flex justify-start'>
                            <img className='w-[9%]' src={Card2Image1} alt="" />
                        </span>
                    </div>
                    {/* DESCRIPTION */}
                    <p className='font-Titillium text-[0.8rem]  font-normal leading-[1.4rem] ml-8 w-[81%]  pt-10 text-white min-[1666px]:pt-7 text-[1rem] min-[1360px]:pt-6 border-solid border-t-[1px] border-[#8a8a8a] text-[1rem]'>For members who want to race but don’t want to commit to an entire season, RAFA Racing Club gives you opportunities to participate in series or own race cars on a fractional basis. </p>
                </div>
                {/* CARD 2 END */}
                {/* VERTICAL TEXT MARQUEE */}
                <div className='flex justify-center items-center px-10 flex-col relative overflow-y-hidden marquee-card'>
                    <VerticalMarquee />
                </div>
                {/* VERTICAL TEXT MARQUEE END */}
            </div>
        </div>
            

        </>
    )
}

export default Section4Card