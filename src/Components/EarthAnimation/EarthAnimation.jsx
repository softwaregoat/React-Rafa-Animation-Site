import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../Screens/Home/Home.css';
import ScrollTrigger from "gsap/ScrollTrigger";
// IMAGE
import BorderImages from "../../assets/Ellipse 8.png";

gsap.registerPlugin(ScrollTrigger);

const EarthAnimation = () => {


    // GSAP
    useGSAP(()=>{
        gsap.to("#ZoomUpEarth" , {
            scale: 1,
            duration: 1,
            scrollTrigger : {
                scroller: '.container',
                trigger: "#ZoomUpStart",
                start: "top 70%",
                toggleActions : "restart none none none"
            }
        })
        gsap.to("#EarthRotation" , {
            backgroundPosition: "100% 0%",
            yoyo: true,
            duration: 10,
            repeat: -1,
            ease: "none"

        })
    })

    
    return (
        <>
        {/* <div id='ZoomUpStart' className='-mb-[41.5%] flex justify-center items-center'> */}
            {/* IMAGE BORDER */}
            {/* <img className='w-[42%] h-[50%]' src={BorderImages} alt="" /> */}
        {/* </div> */}
            <div id='ZoomUpStart' className='flex justify-center absolute left-[20%] right-[20%] bottom-[90%] min-[1666px]:bottom-[85%] '>
                {/* BACKGROUND EARTH IMAGE */}
                <div id='ZoomUpEarth' className='absolute  w-[500px] scale-0 h-[500px]  flex justify-center items-center text-center border-solid border-[1px] border-[#8b8b8b] rounded-[50%] p-[7px] min-[1666px]:w-[600px] min-[1666px]:h-[600px]'>
                    <div id='EarthRotation'  ></div>
                </div>
            </div>
        </>
    )
}

export default EarthAnimation