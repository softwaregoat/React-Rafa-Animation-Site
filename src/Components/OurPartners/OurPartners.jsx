import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../Screens/Home/Home.css';
import ScrollTrigger from "gsap/ScrollTrigger";
// IMAGE
import SRO from "../../assets/sro.png";
import MCLAREN from "../../assets/mclaren.png";
import IMSA from "../../assets/imsa.png";
import PORSCHE1 from "../../assets/porsche1.png";
import IRACING from "../../assets/iracing.png";
import PORSCHE2 from "../../assets/porsche2.png";
import STWELVE from "../../assets/stwelve.png";
import IMG812 from "../../assets/812.png";
import RAFA from "../../assets/rafa.png";
import IRONNECK from "../../assets/iron-neck.png";
import THORNE from "../../assets/thorne.png";
import KEISER from "../../assets/keiser.png";

gsap.registerPlugin(ScrollTrigger);

const OurPartners = () => {


    // GSAP
    // useGSAP(()=>{
    //     gsap.to("#ZoomUpEarth" , {
    //         scale: 1,
    //         duration: 1,
    //         scrollTrigger : {
    //             scroller: '.container',
    //             trigger: "#ZoomUpStart",
    //             start: "top 70%",
    //             toggleActions : "restart none none none"
    //         }
    //     })
    //     gsap.to("#EarthRotation" , {
    //         backgroundPosition: "100% 0%",
    //         yoyo: true,
    //         duration: 10,
    //         repeat: -1,
    //         ease: "none"

    //     })
    // })

    
    return (
        <>
            <div className='our-partners flex p-10 h-[100vh] items-center flex-col md:flex-row justify-center'>
                <div className='md:w-[60%] w-[100%] '>
                    <span className="block md:hidden my-10 text-[#BA2427] text-4xl font-semibold w-[80%] min-[1666px]:text-7xl">
                        <h1 className="">Our Partners</h1>
                    </span>
                    <div className='flex first-row h-[10vh] md:h-[20vh]'>
                        <div className='col first-col'><img src={SRO} alt="" /></div>
                        <div className='col'><img src={MCLAREN} alt="" /></div>
                        <div className='col last-col'><img src={IMSA} alt="" /></div>
                    </div>

                    <div className='flex  h-[10vh] md:h-[20vh]'>
                        <div className='col first-col'><img src={PORSCHE1} alt="" /></div>
                        <div className='col'><img src={IRACING} alt="" /></div>
                        <div className='col last-col'><img src={PORSCHE2} alt="" /></div>
                    </div>

                    <div className='flex  h-[10vh] md:h-[20vh]'>
                        <div className='col first-col'><img src={STWELVE} alt="" /></div>
                        <div className='col'><img src={IMG812} alt="" /></div>
                        <div className='col last-col'><img src={RAFA} alt="" /></div>
                    </div>

                    <div className='flex last-row  h-[10vh] md:h-[20vh]'>
                        <div className='col first-col'><img src={IRONNECK} alt="" /></div>
                        <div className='col'><img src={THORNE} alt="" /></div>
                        <div className='col last-col'><img src={KEISER} alt="" /></div>
                    </div>
                </div>

                <div className='md:w-[40%] flex our-partners-right md:px-10'>

                    <span className="hidden md:block text-[#ba2427] text-4xl font-semibold w-[80%] min-[1666px]:text-7xl">
                        <h1 className="text-[#ba2427]">Our Partners</h1>
                    </span>

                    <p className='md:pl-10 my-10 text-[1rem]'>We proudly partner with the best— from innovative challenger brands to some of the most iconic names in motorsport.</p>
                    <button className="font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-6 py-[15px]">Interested in becoming a partner?</button>
                </div>
            </div>
        </>
    )
}

export default OurPartners