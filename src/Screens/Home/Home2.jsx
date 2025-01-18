import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from '../../Components/Navbar/Navbar';
import MainHeroSection from '../../Components/HomeSections/MainHeroSection';
import VideoSection2 from '../../Components/VideoSection2/VideoSection2';
import CardSection from '../../Components/HomeSections/CardSection.jsx';
import CardSection2 from '../../Components/HomeSections/CardSection2.jsx';
import CardSection3 from '../../Components/HomeSections/CardSection3.jsx';
gsap.registerPlugin(ScrollTrigger);
import '../Home/Home.css'
import Section4Card from '../../Components/HomeSections/Section4Card.jsx';
import PerformanceSection from '../../Components/HomeSections/PerformanceSection.jsx';
import Section6 from '../../Components/HomeSections/Section6.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import EarthAnimation from '../../Components/EarthAnimation/EarthAnimation.jsx';
import MainVideo from '../../Videos/video1.webm'
import header1 from '../../assets/svg/headerintro.svg'

import NavigationBlack from '../../Components/Navbar/NavigationBlack.jsx';

const Home = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [])
    // FULL SCREEN AND VIDEO DOWN ANIMATION
    useGSAP(() => {
        // FULL SCREEN SCROLL TRANSITIONS

        gsap.to(".middle-bar", {
            x: window.innerWidth,
            duration: 2.5,
            ease: "power2.out", 
        });
         
        gsap.fromTo(".side-bar.left" , 
            {},
            {
            width: '2.5vw',
            // y: '-100vh',
            duration: 2.5,
            delay:2.5,
            scrollTrigger: {
                trigger: "#bottom-overlay",
                toggleActions: "play none none none",
            }
        });

        gsap.to(".side-bar.right" , {
            width: '2.5vw',
            // y: '-100vh',
            duration: 2.5,
            delay:2.5,
            scrollTrigger: {
                trigger: "#bottom-overlay",
                toggleActions: "play none none none",
            }
        });

        gsap.fromTo(".bottom-bar" , 
            {
                // height:50,
            },
            {
            height:'2.5vw',
            // y: '-100vh',
            duration: 2.5,
            delay:2.5,
            scrollTrigger: {
                trigger: "#bottom-overlay",
                toggleActions: "play none none none",
            }
        });


        // when you scroll to next section
        gsap.fromTo(".bottom-bar", 
            {
                // height:25,
            },
            {
                height:  0,
                y:50,
                // opacity:0,
                duration: 1,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#main1",
                    scrub: 1,
                }
        });

        gsap.fromTo(".side-bar.left", 
            {
                // width: 25,
            },
            {
                width: 0,
                x:-50,
                // opacity:0,
                duration: 1,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#main1",
                    scrub: 1,
                }
        });

        gsap.fromTo(".side-bar.right", 
            {
                // width: 25,
            },
            {
                width: 0,
                x:50,
                // opacity:0,
                duration: 1,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: "#main1",
                    scrub: 1,
                }
        });


        // next section

         gsap.to(".video-container", {
            zIndex: -1,
            duration: 1.8,
            scrollTrigger: {
                scroller: '.container',
                trigger: ".section-logos",
                scrub: 1,
                start: "top 43%",
                end: "bottom top",
            }

        }),


        
        gsap.to("#black_nav_bar", {
            zIndex: 100,
            // duration: 1.8,
            scrollTrigger: {
                scroller: '.container',
                trigger: ".black-nav-bar",
                scrub: 1,
                start: "top 1%",
                // end: "bottom top",
            }

        }),


        gsap.to(".section-04 h2", {
            scrollTrigger: {
                scroller: ".container",
                trigger: ".section-04",
                start: 'center 55%',
                toggleActions: 'restart complete restart',
                scrub: 2,
                scroll: 1,
            },
            scale: 4,
            duration: 1.5,
            ease: "power2.out", 
        });


        gsap.to(".section-04 h2", {
            scrollTrigger: {
                scroller: ".container",
                trigger: ".section-04",
                start: 'center 55%',
                toggleActions: 'restart complete restart',
                scrub: 2,
                scroll: 1,
            },
            scale: 4,
            duration: 1.5,
            ease: "power2.out", 
        });
    }, [])

    return (
        <div>
            <div className="container overflow-x-hidden">
                {/* Section 1 */}
                <div className="section1 section-01">
                    <div className="video-container hidden md:block">
                        <video muted loop autoPlay playsInline ref={videoRef}  preload="auto"  id='background-video' src={MainVideo} type='video/webm' className='w-[100vw] h-[100vh]'></video>
                    </div>

                    <div className='section-01-overlay px-5 md:px-0'>
                        <div id='top-hero' className='h-[100vh] md:h-[45vh] flex flex-col justify-end'>
                            <Navbar></Navbar>
                            <div className="md:hidden">
                                <div class="crop-wrapper">
                                        <div class="cropper-text-mobile">
                                            <img src={header1} alt="" />            
                                        </div>
                                </div>
                                                        
                                <video muted autoPlay loop  playsInline   preload="auto"  ref={videoRef} src={MainVideo} className='w-[100vw]' type='video/webm'></video>
                            </div>
                            <MainHeroSection></MainHeroSection>
                        </div>

                        <div className='hidden md:flex' id='bottom-overlay'>
                            <div className="side-bar left  h-[100vh] w-[5vw] fixed z-[2]"></div>
                            <div className="middle-bar  h-[50vh]  z-[2]"></div>
                            <div className="side-bar right   h-[100vh] w-[5vw] fixed"></div>
                            <div className="bottom-bar  h-[5vw] w-[100vw] fixed"></div>
                        </div>
                    </div>
                </div>

                <div className="section section-logos">
                    <VideoSection2></VideoSection2>
                </div>

                <div className='black-nav-bar'>
                    <NavigationBlack/>
                </div>

                <div className="section section-02 ">
                    <CardSection></CardSection>
                </div>
                {/* CARD 3 */}
                <div className="section section-03 ">
                    <CardSection2></CardSection2>
                </div>
                {/* CARD 4 */}
                <div className="section section-04 ">
                    <CardSection3></CardSection3>
                </div>
                <div className='section section-05'>
                    <Section4Card></Section4Card>
                </div>
                <div className='section section-06'>
                    <PerformanceSection></PerformanceSection>
                </div>
                <div className='section7 section-07 '>
                    <div className="relative flex" >
                        <EarthAnimation />
                        <Section6 />
                    </div>
                </div>
                <div className='section8 section-08'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}

export default Home