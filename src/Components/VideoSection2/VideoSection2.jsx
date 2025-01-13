import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// VIDEOS

// IMAGES
import HeadPhone from '../../assets/headphones-02.png'
import Logo from '../../assets/RAFA-Racing-Mark-Wht 2.png'



const VideoSection2 = () => {
    const [showButton, setShowButton] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    // AUTO PLAY VIDEO
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [])

    //   GSAP
    useGSAP(() => {
        // FULL WIDTH VIDEO
        gsap.fromTo("#VideoLogo", 
            {
                y:'-50vh',
                opacity:0,
            },
            {
                ease: "power2.out",
            y: '10vh',
            opacity:1,
            duration: 1,
            scrollTrigger: {
                scroller: '.container',
                trigger: "#main1",
                scrub: 1,
            }

        })

        // FULL WIDTH VIDEO
        gsap.fromTo("#audio-btn", 
            {
                y:'50vh',
                opacity:0,
            },
            {
            y:  '-15vh',
            opacity:1,
            duration: 1,
            scrollTrigger: {
                scroller: '.container',
                trigger: "#main1",
                scrub: 1,
            }

        })

    });

    return (
            <div id='main1' className=' h-[100vh] w-[100%]'>
                <div id='MainDiv' className='w-[100%] h-[100vh] flex  justify-center relative overflow-hidden'>
                    <div id='VideoLogo' className={`absolute top-[2.5%] min-[1666px]:top-[5%] flex justify-center z-50  gap-3  items-center px-5 py-3 rounded-full`} >
                        <img className='w-[150px] h-[50px] opacity-[90%]' src={Logo} alt="" />
                    </div>

                    <div id='audio-btn' className={`absolute bottom-[5%] flex justify-center bg-black  z-50  gap-3  items-center px-5 py-3 rounded-full bg-gradient-to-r from-[#811416] to-[#ba2427]`} >
                        <img className='w-[20px] h-[20px]' src={HeadPhone} alt="" />
                        <p className=' text-white font-Titillium text-[11px] tracking-[0.15rem] min-[1666px]:top-[80%]' >TURN ON AUDIO</p>
                    </div>

                </div>
            </div>

        

    );
};

export default VideoSection2;
