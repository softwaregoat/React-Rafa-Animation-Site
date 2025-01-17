import React, { useRef, useState } from 'react';
import '../../Screens/Home/Home.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import header1 from '../../assets/svg/headerintro.svg'

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

        // SET INITIAL VALUE
        
        // RUN ANIMATION
       

            
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
                y:'-10vh',
                duration: 2.5,
                delay: 2.5,
                scrollTrigger: {
                    trigger: "#bottom-overlay",
                    toggleActions: "restart none none none",
                    snap:0.5
                }
            });

        });


        
        
    })




    return (
        <>
            <div id='HeroParaAppear' className="h-[200px]">
               
                <div id='text-content-1' className="bg-[#E72427] flex justify-center items-center  py-5 md:py-[0px] md:px-[0px]">
                    {/* Heading */}
                    <div id='heading-1' className="text-white text-5xl w-[70%] overflow-hidden">
                   <div class="crop-wrapper">
                        <div class="cropper-text">
                            
                           <img src={header1} alt="" />
                        
                            </div>
                            </div>
                        
                      
                        
                    </div>

                    {/* Text and Button Section */}
                    <div className="sub-content min-[1199px]:w-[100%] min-[1280px]:w-[75%] flex flex-col gap-5 justify-start overflow-hidden">
                        <p ref={MainParaGraph} className="font-Titillium text-white w-[45%] min-[1199px]:text-[13px] min-[1360px]:text-[1rem] leading-[1.6rem] text-[1rem] font-light min-[1666px]:text-[1rem]">
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