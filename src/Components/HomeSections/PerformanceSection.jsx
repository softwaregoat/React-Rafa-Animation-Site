import gsap from 'gsap'
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
// VIDEO
import Sec5BannerVideo from '../../Videos/Performance.webm'

gsap.registerPlugin(ScrollTrigger);


const PerformanceSection = () => {

    // FIND PARAGRAPH VALUE
    const ParaGraph = useRef()

    // SET CONDITION TO PLAY VIDEO AUTOMATICALLY
    const RefVideo = useRef(null);

    //Chrome Browser Ristrict About Autoplay Video Attributes
    //  With Music Thats Why I add This Condition
    useEffect(() => {
        if (RefVideo.current) {
            RefVideo.current.play()
        }
    }, [])

    // GSAP
    useGSAP(() => {
        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara = '';
        let Paragraph = ParaGraph.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = Paragraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara += `<span style="display: inline-block;" id="TextAppear">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara += ' '; // Simple space between words
            }
        }

        ParaGraph.current.innerHTML = NewPara;
        // SET INITIAL VALUE
        gsap.set("#TextAppear", {
            opacity: 0, x: 50, rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to('#TextAppear', {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 1,
            delay: 0.8,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                scroller: '.container',
                trigger: "#TEXTSTART",
                toggleActions: "restart none none none",
                start: "top 40%"
            }
        }
        );
    })



    // TEXT ANIMATION
    useGSAP(() => {
        gsap.fromTo(".PerformaneCenter > h1:nth-child(1)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // This makes the animation reverse after each cycle
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#TEXTSTART",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(2)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.01,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#TEXTSTART",
                    toggleActions: "restart none none none",
                    start: "top 40%",
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(3)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#TEXTSTART",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(4)",
            { x: "-150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#TEXTSTART",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });
    })

    return (
        <>
            <div className="bg-[#0c0c0c] min-h-screen md:px-12 pb-20  py-16" >
                <div className='block md:hidden uppercase text-[#E72427] text-8xl overflow-hidden opacity-[90%] text-center'>
                    <h1 className='text-[#E72427] leading-[80px] '>Perfor<br/>mance<br/>center</h1>
                </div>

                <div id='TEXTSTART' className='w-[100%] z-10 relative hidden md:block'>
                    {/* HEADING */}
                    <span className='uppercase text-[#E72427] leading-[60px] text-[105px] font-medium overflow-hidden opacity-[90%] min-[1666px]:text-[120px]'>
                        <div className="PerformaneCenter first-line">
                            Performance
                            <h1 className='text-[#E72427]'>Performance</h1>
                            <h1 className='text-[#E72427]'>Performance</h1>
                            <h1 className='text-[#E72427]'>Performance</h1>
                            <h1 className='text-[#E72427]'>Performance</h1>
                        </div>
                    </span>
                    <span className='text-[#E72427] z-50 text-[105px] font-light uppercase overflow-hidden'>
                        <div className="PerformaneCenter opacity-[90%] min-[1666px]:text-[120px]">
                            Center
                            <h1 className='text-[#E72427]'>Center</h1>
                            <h1 className='text-[#E72427]'>Center</h1>
                            <h1 className='text-[#E72427]'>Center</h1>
                            <h1 className='text-[#E72427]'>Center</h1>
                        </div>
                    </span>
                </div>
                <div className='flex items-center md:mt-[-57px] mt-[-25px] right-half performance'>
                    {/* VIDEO  */}
                    <span className='bg-white w-[75%] max-[768px]:w-[100%] video-span'>
                        <video src={Sec5BannerVideo} muted loop ref={RefVideo}></video>
                    </span>
                    {/* PARAGRAPH AND BUTTON */}
                    <div className='md:w-[50%] px-7 md:mt-40 mt-10'>
                        <div className=' border-solid border-t-[1px] border-[#4d4d4d] pt-7 ' >
                            <p ref={ParaGraph} className='w-[85%] text-white font-Titillium text-[15px] '>Our F1 inspired training facilities feature state of the eart equipment and  programming designed in partnership with world class performance coaches Bradley Scanes (Max Verstappen) and  Michael Italiano (Daniel Ricardo & Yuki Tsunoda). </p>

                        </div>

                        <button className='md:w-[180px] w-full font-Titillium uppercase tracking-[1px] text-[12px] font-bold  bg-gradient-to-r from-[#1E2223] to-[#0C0D0E] text-white rounded-3xl px-10 py-4 mt-[56px] min-[1666px]:mt-[90px]'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerformanceSection