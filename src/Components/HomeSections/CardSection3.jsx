import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react'
import Card3Video from '../../Videos/Card3Video.webm'
gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
    // SET CONDITION TO PLAY VIDEO AUTOMATICALLY
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    //Chrome Browser Ristrict About Autoplay Video Attributes
    //  With Music Thats Why I add This Condition
    useEffect(() => {
        if (videoRef2.current) {
            videoRef2.current.play()
        }
    }, [])
    useEffect(() => {
        if (videoRef3.current) {
            videoRef3.current.play()
        }
    }, [])


    // HEADER TEXT ANIMATION
    // CARD 1
    useGSAP(() => {
        gsap.fromTo(".ScrollImageHead3 > h1:nth-child(1)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection3",
                    start: 'center 55%',
                    toggleActions: 'restart none none none',
    
                }
            });

        gsap.fromTo(".ScrollImageHead3 > h1:nth-child(2)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.05,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection3",
                    start: 'center 55%',
                    toggleActions: 'restart none none none',
    
                }
            });

        gsap.fromTo(".ScrollImageHead3 > h1:nth-child(3)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection3",
                    start: 'center 55%',
                    toggleActions: 'restart none none none',
    
                }
            });

        gsap.fromTo(".ScrollImageHead3 > h1:nth-child(4)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection3",
                    start: 'center 55%',
                    toggleActions: 'restart none none none',
    
                }
            });


            gsap.to(".right-video-overlay.video3", {
                height:0,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection3",
                    end: 'bottom',
                    toggleActions: 'restart none none none',
                },
                duration: 1,
            })
    })


    // FIND VALUE
    const ScrollParaAppear3 = useRef(null)
    // GSAP PARA GRAPH ANIMATION
    // PARA 3
    useGSAP(() => {

        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara = '';
        let Paragraph = ScrollParaAppear3.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = Paragraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara += `<span style="display: inline-block;" id="ScrollParagraphAppear3">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara += ' '; // Simple space between words
            }
        }

        ScrollParaAppear3.current.innerHTML = NewPara;
        // SET INITIAL VALUE
        gsap.set(`#ScrollParagraphAppear3`, {
            opacity: 0, x: 50, rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to(`#ScrollParagraphAppear3`, {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                scroller: ".container",
                trigger: "#CardSection3",
                start: 'center 55%',
                toggleActions: 'restart none none none',

            }
        }
        );

    })



    return (
        <>
            <div id='CardSection3' className='flex w-[100%] px-5 md:px-10 items-center justify-center py-16'>
                {/* CARD 3 CONTENT  */}
                <div className='flex w-[50%] d-flex md:h-[100%]  left-half md:pr-10'>
                    <div className=' w-[100%] flex flex-col justify-center gap-14 border-solid border-b-[1px] border-[#D9D9D9]'>
                        <div>
                            <div className='flex justify-between unparalleled md:mb-10'>
                                <h6 className='font-Titillium min-[1666px]:text-[20px]'>Unparalleled Amenities</h6>
                                <div className='mobile'>
                                    <div className='flex'>
                                        <p className='text-[22px] h-[37px] border-r-[1px] border-solid border-[#D9D9D9] pr-6 text-[]'>03</p>
                                        <p className='text-[22px] pl-6 h-[10px] text-[#8d8d8d]'>04</p>
                                    </div>
                                </div>
                            </div>

                            <span className='text-[#ba2427] text-6xl font-semibold w-[80%] min-[1666px]:text-7xl'>
                                <div className="ScrollImageHead3">
                                    Sim
                                    <h1 className='text-[#ba2427]'>   Sim </h1>
                                    <h1 className='text-[#ba2427]'>   Sim </h1>
                                    <h1 className='text-[#ba2427]'>   Sim </h1>
                                    <h1 className='text-[#ba2427]'>   Sim </h1>
                                </div>
                            </span>
                            <span className='text-[#ba2427] text-6xl font-semibold w-[80%] min-[1666px]:text-7xl'>
                                <div className="ScrollImageHead3">
                                    Setup
                                    <h1 className='text-[#ba2427]'> Setup</h1>
                                    <h1 className='text-[#ba2427]'> Setup</h1>
                                    <h1 className='text-[#ba2427]'> Setup</h1>
                                    <h1 className='text-[#ba2427]'> Setup</h1>
                                </div>
                            </span>

                        </div>
                        <div className='desktop flex gap-28 min-[1360px]:w-[85%] min-[1440px]:w-[85%]  min-[1666px]:w-[80%]'>
                            <span className='border-solid border-t-[1px] border-[#D9D9D9] flex pt-8 text-[#3d3d3d]'>
                                <p className='text-2xl h-[37px] border-r-[1px] border-solid border-[#D9D9D9] pr-6'>03</p>
                                <p className='text-2xl pl-6 h-[10px] text-[#8d8d8d]'>03</p>
                            </span>
                            <span className='font-Titillium text-[20px] border-solid border-t-[1px] border-[#D9D9D9] pt-8 pb-24 min-[1666px]:text-[17px] min-[1440px]:pb-24 min-[1666px]:pb-28'>
                                <p ref={ScrollParaAppear3} id='Para3'>With access to our state-of-the-art racing simulators, club members can hone their skills, join league play and compete in tournaments.</p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* CARD 3 Video */}
                <div className='w-[50%] relative right-half mt-5 md:mt-0'>
                    <div className='right-video-overlay video3'></div>
                    <video id='Card3Video' className='md:h-[80vh] w-full' autoPlay muted loop  playsInline   preload="auto"  src={Card3Video} type='video/webm' ref={videoRef3} ></video>
                    
                </div>
                <span className='md:hidden font-Titillium text-[20px] border-solid border-b-[1px] border-[#D9D9D9] py-5'>
                    <p className='min-[1360px]:text-[1rem] leading-[1.6rem] text-[1rem] font-light min-[1666px]:text-[1rem]'>With access to our state-of-the-art racing simulators, club members can hone their skills, join league play and compete in tournaments.</p>
                </span>
            </div>

        </>
    )
}


export default CardSection