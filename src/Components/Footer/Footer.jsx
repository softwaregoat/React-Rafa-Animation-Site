import React from 'react';
import '../../Screens/Home/Home.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// IMAGE
import FooterImage from '../../assets/FooterImage.png'


const Footer = () => {
    // TEXT ANIMATION
    useGSAP(() => {
        gsap.fromTo(".JoinUs > h1:nth-child(1)",
            { x: "-180%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    trigger: "#Footer",
                    scroller: ".container",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".JoinUs > h1:nth-child(2)",
            { x: "-180%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: "#Footer",
                    scroller: ".container",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".JoinUs > h1:nth-child(3)",
            { x: "-180%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    trigger: "#Footer",
                    scroller: ".container",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".JoinUs > h1:nth-child(4)",
            { x: "-180%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.5,
                scrollTrigger: {
                    trigger: "#Footer",
                    scroller: ".container",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });
    })


    return (
        <>
            <div id='Footer' className='bg-black'>
                {/* HEADER AND IMAGE */}
                <div className='md:flex justify-center items-center gap-32 md:px-20  py-[115px] md:h-[95vh]'>
                    <div className='flex flex-col gap-5 overflow-hidden px-20'>
                        <div className='text-white text-6xl'>
                            <div className="JoinUs w-[250px]">
                                JOIN US
                                <h1 className='text-white'>  JOIN US</h1>
                                <h1 className='text-white'>  JOIN US</h1>
                                <h1 className='text-white'>  JOIN US</h1>
                                <h1 className='text-white'>  JOIN US</h1>
                            </div>
                        </div>
                        <button className='hidden md:block font-Titillium uppercase tracking-[1px] text-[12px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-8 py-3'>Apply for membership</button>
                    </div>
                    <div className='md:w-[60%] pt-10 md:pt-0'>
                        <img className='' src={FooterImage} alt="" />
                    </div>

                    <div className='block md:hidden flex flex-col gap-5 overflow-hidden p-20'>
                        <button className='font-Titillium uppercase tracking-[1px] text-[12px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-8 py-3'>Apply for membership</button>
                    </div>

                </div>
                {/* COPY RIGHT AND SOCIAL LINK  */}
                <div className='border-t-[1px] border-solid border-[#525252] py-3'>
                    <p className='block md:hidden text-[#525252] px-5 pb-5 text-center'>&copy; 2024 Rafa Racing Club</p>
                    <ul className='text-[#cacaca] flex gap-20 justify-between px-14 font-Titillium text-sm'>
                        <li className='hidden md:block'>&copy; 2024 Rafa Racing Club</li>
                        <li>Instagram</li>
                        <li>TikTok</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer