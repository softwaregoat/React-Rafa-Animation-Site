import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useState, useRef } from 'react';
import '../../Screens/Home/Home.css';



// COMPONENTS
import MainNavigation from '../../Components/Navbar/Navigation.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import AmenitiesMarquee from '../../Components/VerticalMarquee/AmenitiesMarquee.jsx';
// Assets
import social_club_mobile from '../../assets/social-club-mobile.png';
import baseline_2_1 from '../../assets/baseline-2-1.png';
import Sec5BannerVideo from '../../Videos/Performance.webm'



const Amenities = () => {

    // FIND PARAGRAPH VALUE
    const ParaGraph = useRef();
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
    // paragraph animation
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

    // Preferred Pricing
    // paragraph animation
    const ParaGraph1 = useRef();
    useGSAP(() => {
        // FIND SINGLE WORD FROM THIS ANIMATION
        let NewPara1 = '';
        let ParaGraph = ParaGraph1.current.innerText;
        // SPLIT SINGLE WORD IN ARRAY
        let words = ParaGraph.split(' ');
        // RUN LOOP TO ADD WORDS IN VARAIBLE 
        for (let i = 0; i < words.length; i++) {
            NewPara1 += `<span style="display: inline-block;" id="TextAppear1">${words[i]}</span>`;
            // ADD SPACE ON EVERY WORDS 
            if (i < words.length - 1) {
                NewPara1 += ' '; // Simple space between words
            }
        }

        ParaGraph1.current.innerHTML = NewPara1;
        // SET INITIAL VALUE
        gsap.set("#TextAppear1", {
            opacity: 0, x: 50, rotationX: 90, // 3D rotation
            transformPerspective: 500,
        });
        // RUN ANIMATION
        gsap.to('#TextAppear1', {
            opacity: 1,
            x: 0,
            rotationX: 0,
            duration: 1,
            delay: 0.8,
            ease: 'easeOut',
            stagger: 0.04,
            scrollTrigger: {
                scroller: '.container',
                trigger: ".preferred-pricing",
                toggleActions: "restart none none none",
                start: "top 40%"
            }
        }
        );
    })



    // TEXT ANIMATION
    useGSAP(() => {
        gsap.fromTo(".PerformaneCenter > h1:nth-child(1)",
            { x: "150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // This makes the animation reverse after each cycle
                ease: "power1.inOut",
                // delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: ".preferred-pricing",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(2)",
            { x: "150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.01,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: ".preferred-pricing",
                    toggleActions: "restart none none none",
                    start: "top 40%",
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(3)",
            { x: "150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.2,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: ".preferred-pricing",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });

        gsap.fromTo(".PerformaneCenter > h1:nth-child(4)",
            { x: "150%" },
            {
                x: "0%",
                duration: 2,
                yoyo: true,  // Reverse after each cycle
                ease: "power1.inOut",
                delay: 0.3,
                scrollTrigger: {
                    scroller: '.container',
                    trigger: ".preferred-pricing",
                    toggleActions: "restart none none none",
                    start: "top 40%"
                }
            });
    })
    

    
    return (
        <>
       
        <div className='amenities-page container overflow-x-hidden'>
            <section className='amenities-hero bg-[#E72427] items-center'>
                <MainNavigation />

                <div className='md:hidden px-5 pb-10 pt-[50%] h-[100vh] justify-center'>
                    <div className='flex flex-col gap-5 overflow-hidden  mb-[-10px] ultimate-escape'>
                        <div className='text-white text-4xl'>
                            <div className="">
                                <h1 className='text-white'>The ultimate escape</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-[100%] h-[30%]'>
                        <div className='amenities-hero-gif'></div>
                    </div>

                    <div className='flex flex-col gap-5 overflow-hidden mt-[-20px]'>
                        <div className='text-white text-4xl'>
                            <div className="">
                                <h1 className='text-white leading-[1]'>for racing enthusiasts.</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-end py-[120px]'>
                        <div className='flex flex-col gap-5 overflow-hidden'>
                            <div className='text-white flex family-text text-xl'>
                                    <p>Some join to get more track time. Some join to shave it. And some simply want to spend the free time they have enjoying the sport they love with people they love.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex px-10 h-[90vh] justify-center pl-[150px]'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col gap-5 overflow-hidden  mb-[-18px] ultimate-escape ml-[-150px]'>
                            <div className='text-white text-6xl'>
                                <div className="">
                                    <h1 className='text-white'>The ultimate escape</h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-[100%] h-[50vh] flex'>
                            <div className='amenities-hero-gif'></div>
                    
                            <div className='flex items-end ml-[20px] mb-[50px] min-w-[315px]'>
                                <div className='flex flex-col gap-5 overflow-hidden  w-[315px] bottom-[200px] left-[-35px]'>
                                    <div className='text-white flex family-text'>
                                            <p>Some join to get more track time. Some join to shave it. And some simply want to spend the free time they have enjoying the sport they love with people they love.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 overflow-hidden text-right mt-[-32px] mr-[255px]'>
                            <div className='text-white text-6xl'>
                                <div className="">
                                    <h1 className='text-white leading-[1.1]'>for racing enthusiasts.</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='p-10'>
                <div className='block md:hidden'>
                    <div className='h-[60vh] social-club-mobile-bg w-[100vw] overflow-hidden'>
                        <img src={social_club_mobile} alt="" />
                    </div>
                    <div className='h-[15vh] flex max-[380px]:h-[23vh] max-[500px]:h-[24vh]'>
                        <div className='w-[40%]'>
                            <div className='h-[60%] flex justify-center items-center'>
                                <div className="text-[#ba2427] text-4xl font-semibold ">
                                    <h1 className="text-[#ba2427] w-[120px]">Social <br/>Club</h1>
                                </div>
                            </div>
                            <div className='h-[40%] overflow-hidden'>
                                <img src={baseline_2_1} alt="" />
                            </div>
                        </div>
                        <div className='w-[60%]'>
                            <div className='h-[60%] overflow-hidden'>
                                <img src={baseline_2_1} alt="" />
                            </div>
                            <div className='h-[40%]'>
                                
                            </div>
                        </div>
                    </div>

                    <div className='h-[25vh] flex family-text text-xl p-5 max-[380px]:h-[17vh]  max-[500px]:h-16vh]'>
                        <p>Whether you’re a seasoned gentleman diver or a new but passionate enthusiast, our club is the ultimate destination to escape your daily grind, get plugged into the world of racing, and spend time with likeminded people.</p>
                    </div>

                </div>
                <div className='hidden md:flex social-club p-10'>
                    <div className='flex justify-between w-[100%]'>
                        <div className="text-[#ba2427] text-4xl font-semibold ">
                            <h1 className="text-[#ba2427] w-[120px] text-right">Social <br/>Club</h1>
                        </div>
                        <div className='flex max-w-[20vw]'>
                            <div className='flex flex-col gap-5 overflow-hidden'>
                                <div className='flex family-text text-xl'>
                                        <p>Whether you’re a seasoned gentleman diver or a new but passionate enthusiast, our club is the ultimate destination to escape your daily grind, get plugged into the world of racing, and spend time with likeminded people.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='[@media(max-width:390px)]:snap-align-none h-auto'>
                <div className="bg-[#0c0c0c] min-h-screen md:px-12 pt-10 md:pb-20 [@media(max-width:390px)]:pb-[5rem]" >
                    
                    <div className='block md:hidden uppercase text-[#ba2427] text-8xl overflow-hidden opacity-[90%] text-center'>
                    <h1 className='text-[#BA2427] leading-[80px] [@media(max-width:390px)]:text-[5rem] leading-[3rem] '>Perfor<br/>mance<br/>center</h1>

                    </div>

                    <div id='TEXTSTART' className='w-[100%] z-10 relative hidden md:block'>
                        {/* HEADING */}
                        <span className='uppercase text-[#ba2427] leading-[60px] text-[105px] font-medium overflow-hidden opacity-[90%] min-[1666px]:text-[120px]'>
                            <div className="PerformaneCenter first-line">
                                Performance
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Performance</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Performance</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Performance</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Performance</h1>
                            </div>
                        </span>
                        <span className='text-[#ba2427] z-50 text-[105px] font-light uppercase overflow-hidden'>
                            <div className="PerformaneCenter opacity-[90%] min-[1666px]:text-[120px]">
                                Center
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Center</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Center</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Center</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Center</h1>
                            </div>
                        </span>
                    </div>
                    <div className='flex items-center md:-mt-[57px] -mt-[30px] right-half performance md:max-h-[500px] h-[100%]'>
                        {/* VIDEO  */}
                        <span className='md:w-[70%] w-[100%] video-span overflow-hidden'>
                            <video src={Sec5BannerVideo}  autoPlay muted loop  playsInline  type='video/webm'  preload="auto"ref={RefVideo}></video>
                        </span>
                        {/* PARAGRAPH AND BUTTON */}
                        <div className='md:w-[30%] px-7 flex flex-col justify-between md:h-[100%] mt-[35px] md:mt-0'>
                            <div className='border-solid border-y-[1px] md:border-b-[1px] border-white md:pb-10 py-5'>
                                <p ref={ParaGraph} className='text-white font-Titillium text-[0.8rem] '>Our top-of-the-line performance center has everything you need to stay in shape, plus exclusive technology designed specifically for racing fitness.</p>
                            </div>

                            <div className='pt-7 ' >
                                <h2 className='text-[1.4rem] leading-loose [@media(max-width:390px)]:text-[1rem] leading-[3rem]'>Full gym</h2>
                                <h2 className='text-[1.4rem] leading-loose [@media(max-width:390px)]:text-[1rem] leading-[3rem]'>State of the art equipment</h2>
                                <h2 className='text-[1.4rem] leading-loose [@media(max-width:390px)]:text-[1rem] leading-[3rem]'>F1 curated workout plans</h2>
                                <h2 className='text-[1.4rem] leading-loose [@media(max-width:390px)]:text-[1rem] leading-[3rem]'>iOS and Android workout app</h2>
                            </div>
                            <a href="/contact">
                            <button className='font-Titillium uppercase tracking-[1px] text-[12px] font-bold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-10 py-4 mt-[10px] md:w-[272px]'>Book a session now</button>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section className='bg-black preferred-pricing'>
                <div className='md:flex w-[100%] pl-[10%] relative   overflow: hidden;'>
                    <div className='md:w-[40%]'>
                        <AmenitiesMarquee />
                    </div>

                    <div className='block md:hidden pt-5'>
                        <p ref={ParaGraph1} className='text-white font-Titillium text-[0.8rem]  pl-[5vw]  max-[765px]:pt-[4rem] '>Our relationships in the racing world allow us to offer exclusive access to and preferred rates on the kinds of experiences most racing enthusiasts can only dream of.</p>
                    </div>

                    <div className='block md:hidden absolute text-[#ba2427] text-7xl overflow-hidden text-right top-0 h-[150px]'>
                        <h1 className='text-[#ba2427] leading-[56px] '>Preferred Pricing</h1>
                    </div>

                    <div className='hidden md:block w-[60%]'>
                    
                        <span className='text-[#ba2427] leading-[60px] md:text-[105px] font-medium overflow-hidden opacity-[90%]'>
                            <div className="PerformaneCenter first-line">
                                Preferred
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Preferred</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Preferred</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Preferred</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Preferred</h1>
                            </div>
                        </span>

                        <span className='text-[#ba2427] z-50 text-[105px] font-light overflow-hidden'>
                            <div className="PerformaneCenter leading-[170px]">
                            Pricing
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Pricing</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Pricing</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Pricing</h1>
                                <h1 className='text-[#ba2427] max-[1300px]:text-[7rem]'>Pricing</h1>
                            </div>
                        </span>

                        <div className='mt-10 w-[370px]'>
                            <p ref={ParaGraph1} className='text-white font-Titillium text-[0.8vw] pl-[5vw] '>Our relationships in the racing world allow us to offer exclusive access to and preferred rates on the kinds of experiences most racing enthusiasts can only dream of.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-black'>
                <Footer/>
            </section>
        </div>
        </>
    );
};

export default Amenities;
