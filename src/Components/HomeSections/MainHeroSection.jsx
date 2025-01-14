import React, { useRef, useState } from 'react';
import '../../Screens/Home/Home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const MainHeroSection = () => {
    const [showButton, setShowButton] = useState(false);

    
    // FIND VALUE IN SECTON 1 PARA
    const MainParaGraph = useRef()

    let mm = gsap.matchMedia();

   

    // GSAP PARA GRAPH ANIATION
    useGSAP(() => {

        
        let x_out = '-70%';
        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara = '';
        let Paragraph = MainParaGraph.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = Paragraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara += `<span style="display: inline-block; color: white;" id="HeroSecTextAppear">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara += ' '; // Simple space between words
            }
        }

        MainParaGraph.current.innerHTML = NewPara;
        // SET INITIAL VALUE
        gsap.set("#HeroSecTextAppear", {
            opacity: 0, 
            x: 50,
            rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to('#HeroSecTextAppear', {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 1,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                trigger: "#HeroParaAppear",
                toggleActions: "restart none none none",
            }
        });
        gsap.fromTo(".HeroSecHeader > h1:nth-child(1)",
            { x: x_out },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // This makes the animation reverse after each cycle
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    trigger: "#HeroParaAppear",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".HeroSecHeader > h1:nth-child(2)",
            { x: x_out },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                // delay: 0.05,
                scrollTrigger: {
                    trigger: "#HeroParaAppear",
                    toggleActions: "restart none none none",
                    start: "top 40%",
                }
            });

        gsap.fromTo(".HeroSecHeader > h1:nth-child(3)",
            { x: x_out },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.1,
                scrollTrigger: {
                    trigger: "#HeroParaAppear",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".HeroSecHeader > h1:nth-child(4)",
            { x: x_out },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    trigger: "#HeroParaAppear",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

            
        gsap.set("#ButtonFadeLeft", {
            opacity: 0, x: 100
        });
        gsap.to("#ButtonFadeLeft" , {
            opacity: 1,
            x: 0,
            duration: 2.1,
            scrollTrigger: {
                trigger: "#HeroParaAppear",
                toggleActions: "restart none none none",
            }
        });

        mm.add("(min-width: 768px)", () => {
            // after 2.5 seconds
            gsap.to("#top-hero" , {
                y:'-20vh',
                duration: 2.5,
                delay: 2.5,
                scrollTrigger: {
                    trigger: "#bottom-overlay",
                    toggleActions: "restart none none none",
                    snap:0.5
                }
            });

        });


        // mm.add("(max-width: 768px)", () => {
        //     // after 2.5 seconds
        //     gsap.fromTo(".mobile.logo" , 
        //         {x:-300,},
        //         {
        //         x:0,
        //         duration: 2.5,
        //         // delay: 2.5,
        //         scrollTrigger: {
        //             trigger: "#bottom-overlay",
        //             toggleActions: "restart none none none",
        //             snap:0.5
        //         }
        //     });
        // });
        
    })




    return (
        <>
            <div id='HeroParaAppear' className="">
               
                <div id='text-content-1' className="bg-[#E72427] flex justify-center items-center  py-5 md:py-[70px] md:px-[70px]">
                    {/* Heading */}
                    <div id='heading-1' className="text-white text-5xl w-[70%] overflow-hidden">
                        <span id='' className="w-[80%] ">
                            <div className="HeroSecHeader">
                                Where the
                                <h1 className='text-white'> Where the </h1>
                                <h1 className='text-white'> Where the </h1>
                                <h1 className='text-white'> Where the </h1>
                                <h1 className='text-white'> Where the </h1>
                            </div>
                        </span>
                        <span id='' className="w-[80%] ">
                            <div className="HeroSecHeader">
                                finer things and
                                <h1 className='text-white'>finer things and </h1>
                                <h1 className='text-white'>finer things and </h1>
                                <h1 className='text-white'>finer things and </h1>
                                <h1 className='text-white'>finer things and </h1>
                            </div>
                        </span>
                        <span id='' className="w-[80%] ">
                            <div className="HeroSecHeader">
                                faster things meet
                                <h1 className='text-white'>faster things meet</h1>
                                <h1 className='text-white'>faster things meet</h1>
                                <h1 className='text-white'>faster things meet</h1>
                                <h1 className='text-white'>faster things meet</h1>
                            </div>
                        </span>
                    </div>

                    {/* Text and Button Section */}
                    <div className="sub-content min-[1199px]:w-[100%] min-[1280px]:w-[75%] flex flex-col gap-5 justify-start overflow-hidden">
                        <p ref={MainParaGraph} className="font-Titillium text-white w-[45%] min-[1199px]:text-[13px] min-[1360px]:text-[14px] text-[14px] font-light min-[1666px]:text-[15px]">
                            Welcome to the ultimate luxury racing club. Build community with likeminded people,
                            enjoy exclusive amenities, and get involved in racing-without any of the logistical headaches.
                        </p>
                        <a href="/contact">
                        <button id='ButtonFadeLeft' className="uppercase font-Titillium font-bold text-[12px] tracking-[2px] text-[#E72427]  bg-gradient-to-r from-[#ffff] to-[#FFB3B4] w-[45%] py-2 rounded-3xl min-[1666px]:text-[13px] min-[1666px]:py-3">
                            Apply for Membership
                        </button>
                        </a>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default MainHeroSection