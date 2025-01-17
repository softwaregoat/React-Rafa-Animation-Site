import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from 'react'
import header2 from '../../assets/svg/membersonly.svg'

// IMAGE 
import Logo from '../../assets/Logo2.png'
// VIDEO
import Card1Video from '../../Videos/Card1Video.webm'
gsap.registerPlugin(ScrollTrigger);


const CardSection = () => {
    // SET CONDITION TO PLAY VIDEO AUTOMATICALLY
    const videoRef1 = useRef(null);
    //Chrome Browser Ristrict About Autoplay Video Attributes
    //  With Music Thats Why I add This Condition
    useEffect(() => {
        if (videoRef1.current) {
            videoRef1.current.play()
        }
    }, [])
    // HEADER TEXT ANIMATION
    // CARD 1
    

    useGSAP(() => {
        gsap.fromTo(".ScrollImageHead > h1:nth-child(1)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection1",
                    start: 'center 51%',
                    toggleActions: 'restart none none none',
                }
            });

        gsap.fromTo(".ScrollImageHead > h1:nth-child(2)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.05,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection1",
                    start: 'center 51%',
                    toggleActions: 'restart none none none',
                }
            });

        gsap.fromTo(".ScrollImageHead > h1:nth-child(3)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection1",
                    start: 'center 51%',
                    toggleActions: 'restart none none none',
                }
            });

        gsap.fromTo(".ScrollImageHead > h1:nth-child(4)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 1.5,
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: ".container",
                    trigger: "#CardSection1",
                    start: 'center 51%',
                    toggleActions: 'restart none none none',
                }
            });
            gsap.fromTo(".ScrollImageHead > h1:nth-child(5)",
                { x: "-150%" },
                {
                    x: "0%",
                    duration: 1.5,
                    ease: "power1.inOut",
                    delay: 0.3,
                    scrollTrigger: {
                        scroller: ".container",
                        trigger: "#CardSection1",
                        start: 'center 51%',
                        toggleActions: 'restart none none none',
                    }
                });
           
    })


    // FIND VALUE
    const ScrollParaAppear1 = useRef(null)

    // GSAP PARA GRAPH ANIMATION
    // PARA 1
    useGSAP(() => {

        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara = '';
        let Paragraph = ScrollParaAppear1.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = Paragraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara += `<span style="display: inline-block;" id="ScrollParagraphAppear1">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara += ' '; // Simple space between words
            }
        }

        ScrollParaAppear1.current.innerHTML = NewPara;
        // SET INITIAL VALUE
        gsap.set(`#ScrollParagraphAppear1`, {
            opacity: 0, x: 50, rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to(`#ScrollParagraphAppear1`, {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 0.8,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                scroller: ".container",
                trigger: "#CardSection1",
                start: 'center 51%',
                toggleActions: 'restart none none none',
            }
        }
        );


        gsap.to(".right-video-overlay.video1", {
            height:0,
            scrollTrigger: {
                scroller: ".container",
                trigger: "#CardSection1",
                start: 'top 99%',
                toggleActions: 'restart none none none',
            },
            duration: 0.7,
        })

    })
    return (
        <>
        <div id='CardSection1' className='overflow-hidden overflow-x-hidden py-16'>
            {/* CARD 1 */}
            <div className='flex w-[100%] md:mt-8 md:px-10 px-5 card-content'>
                <div className='flex w-[50%] d-flex left-half md:pr-10'>
                    <div className='flex flex-col justify-center md:gap-14 border-solid border-b-[1px] border-[#D9D9D9]'>
                        <div>
                            <div className='flex justify-between unparalleled md:mb-5'>
                                <h6 className='font-Titillium min-[1666px]:text-[20px]'>Unparalleled Amenities</h6>
                                <div className='mobile'>
                                    <div className='flex'>
                                        <p className='text-[22px] h-[37px] border-r-[1px] border-solid border-[#D9D9D9] pr-6 text-[]'>01</p>
                                        <p className='text-[22px] pl-6 h-[10px] text-[#8d8d8d]'>03</p>
                                    </div>
                                </div>
                            </div>
                            <span className='text-[#BA2427] text-5xl font-semibold w-[80px] min-[1666px]:text-7xl '>
                                <div className="ScrollImageHead h-[50px]">
                                    Members-Only
                                    <h1 className='text-[#BA2427] [@media(max-width:390px)]:text-[2rem] leading-[3rem]'>Members-Only </h1>
                                    <h1 className='text-[#BA2427] [@media(max-width:390px)]:text-[2rem] leading-[3rem]'>Members-Only </h1>
                                    <h1 className='text-[#BA2427] [@media(max-width:390px)]:text-[2rem] leading-[3rem]'>Members-Only </h1>
                                    <h1 className='text-[#BA2427] [@media(max-width:390px)]:text-[2rem] leading-[3rem]'>Members-Only </h1>
                                    <h1 className='text-[#BA2427] [@media(max-width:390px)]:text-[2rem] leading-[3rem]'>Members-Only</h1>
                                   {/* <h1><img src={header2}/></h1>*/}

                                </div>
                            </span>
                            <span className='text-[#BA2427] text-5xl font-semibold w-[80%] min-[1666px]:text-7xl'>
                                <div className="ScrollImageHead">
                                    Clubhouse
                                    <h1 className='text-[#BA2427]'>    Clubhouse </h1>
                                    <h1 className='text-[#BA2427]'>    Clubhouse </h1>
                                    <h1 className='text-[#BA2427]'>    Clubhouse </h1>
                                    <h1 className='text-[#BA2427]'>    Clubhouse </h1>
                                    

                                </div>
                            </span>
                        </div>
                        <div className='desktop flex gap-28  min-[1360px]:w-[85%] min-[1440px]:w-[85%] min-[1666px]:w-[80%] '>
                            <span className='border-solid border-t-[1px] border-[#D9D9D9] flex pt-8 '>
                                <p className='text-[22px] h-[37px] border-r-[1px] border-solid border-[#D9D9D9] pr-6 text-[]'>01</p>
                                <p className='text-[22px] pl-6 h-[10px] text-[#8d8d8d]'>03</p>
                            </span>
                            <span className='font-Titillium text-[0.8vw]   border-solid border-t-[1px] border-[#D9D9D9] pt-8 pb-24 min-[1666px]:text-[1.2rem] min-[1440px]:pb-24 min-[1666px]:pb-28 '>
                                <p ref={ScrollParaAppear1} id='Para1' >A private space to relax, play, or work. Grab a drink at the lounge, take business meetings, or get plugged in with tech talks, watch parties, cocktail hours, exclusive cars & coffees and more. </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] relative right-half mt-5 md:mt-0'>
                    <div className='right-video-overlay video1'></div>
                    <video id='Card1Video' className='md:h-[80vh] w-full' autoPlay muted loop  playsInline   preload="auto"  src={Card1Video}  type='video/webm'ref={videoRef1} ></video>
                </div>
                <span className='md:hidden font-Titillium text-[20px] border-solid border-b-[1px] border-[#D9D9D9] py-5 min-[1666px]:text-[1.2rem]'>
                    <p id='Para1' className='min-[1360px]:text-[1rem] leading-[1.6rem] text-[1rem] font-light min-[1666px]:text-[1rem]'>A private space to relax, play, or work. Grab a drink at the lounge, take business meetings, or get plugged in with tech talks, watch parties, cocktail hours, exclusive cars & coffees and more. </p>
                </span>
            </div>
            </div>

        </>
    )
}


export default CardSection