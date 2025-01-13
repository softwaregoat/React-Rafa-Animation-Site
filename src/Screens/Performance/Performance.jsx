import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useState } from 'react';
import '../../Screens/Home/Home.css';



// COMPONENTS
import OurPartners from '../../Components/OurPartners/OurPartners.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
// Assets
import Logo from '../../assets/RAFA-Racing-Mark-Wht 1.png';
import performance_hero from '../../assets/perfromance.gif';
import baseline_1_1 from '../../assets/baseline-1-1.png';
import train_1_2 from '../../assets/train-1-2.png';
import baseline_2_1 from '../../assets/baseline-2-1.png';
import close_menu_icon from '../../assets/close-menu.png';
import open_menu_icon from '../../assets/open-menu.png';
import mobile_baseline_top from '../../assets/mobile-baseline-top.png';
import mobile_baseline_top_black from '../../assets/mobile-baseline-top-black.png';
import mobile_baseline_bottom from '../../assets/mobile-baseline-bottom.png';
import mobile_baseline_bottom_black from '../../assets/mobile-baseline-bottom-black.png';


const Performance = () => {
    
    const [show, setShow] = useState(false);

    const changeState = () => {
        setShow(!show);
    };
    
    return (
        <>
        <div className='about-page container overflow-x-hidden'>
            <section className='performance-hero relative'>
                <div className='bg-transparent absolute w-[100vw] top-0 z-[100]'>
                    <nav className='hidden md:flex text-xl py-5 justify-between px-24 text-white'>
                        <a href="/"><img src={Logo} alt="Rafa" className='h-[30px]'/></a>
                        <a href="/about"><p className='font-Titillium text-[14px]'>About</p></a>
                        <a href="/amenities"><p className='font-Titillium text-[14px]'>Amenities & Services</p></a>
                        <a href="/performance"><p className='font-Titillium text-[14px]'>Performance Center</p></a>
                        <a href="/contact"><p className='font-Titillium text-[14px]'>Contact</p></a>
                    </nav>

                    <nav className="block md:hidden">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src={Logo} className="h-8" alt="Rafa" />
                            </a>
                            <button onClick={() => {changeState();}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white" aria-controls="navbar-default" aria-expanded="false">
                                <img src={open_menu_icon} style={{maxWidth:'unset'}} className={show?'hidden':''} alt="" />
                                <img src={close_menu_icon} style={{maxWidth:'unset'}} className={!show?'hidden':''} alt="" />
                            </button>

                            
                            <div className={show?'w-full md:block md:w-auto bg-[#ba2427] z-[20]': 'hidden'} id="navbar-default" >
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  text-[30px]">
                                    <li>
                                    <a href="/about" className="block py-2 px-3 text-white font-Titillium" aria-current="page">About</a>
                                    </li>
                                    <li>
                                    <a href="/amenities" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Amenities & Services</a>
                                    </li>
                                    <li>
                                    <a href="/performance" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Performance Center</a>
                                    </li>
                                    <li>
                                    <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className='md:flex md:p-10 items-end w-[100vw] h-[100vh] relative'>
                    <div className='w-[100%] block md:hidden pt-[100px] pb-[50px] px-5'>
                        {/* HEADING */}
                        <span className='uppercase text-white text-[40px] font-medium overflow-hidden'>
                            <div className="first-line">
                                <h1>An F1-level<br/>Performance center<br/>at your fingertips</h1>
                            </div>
                        </span>
                    </div>

                    <img src={performance_hero} className='block md:hidden' alt="" />

                    <div id='TEXTSTART' className='w-[100%] z-10 relative md:opacity-[80%] hidden md:block'>
                        {/* HEADING */}
                        <span className='uppercase text-[#ba2427] leading-[60px] text-[105px] font-medium overflow-hidden min-[1666px]:text-[120px]'>
                            <div className="PerformaneCenter first-line">
                                An F1-level
                                <h1 className='text-[#ba2427]'>An F1-level</h1>
                                <h1 className='text-[#ba2427]'>An F1-level</h1>
                                <h1 className='text-[#ba2427]'>An F1-level</h1>
                                <h1 className='text-[#ba2427]'>An F1-level</h1>
                            </div>
                        </span>
                        <span className='text-[#ba2427] z-50 text-[105px] font-light uppercase overflow-hidden'>
                            <div className="PerformaneCenter">
                                Performance center
                                <h1 className='text-[#ba2427]'>Performance center</h1>
                                <h1 className='text-[#ba2427]'>Performance center</h1>
                                <h1 className='text-[#ba2427]'>Performance center</h1>
                                <h1 className='text-[#ba2427]'>Performance center</h1>
                            </div>
                        </span>

                        <span className='text-[#ba2427] z-50 text-[80px] font-light uppercase overflow-hidden'>
                            <div className="PerformaneCenter last-line">
                                at your fingertips
                                <h1 className='text-[#ba2427]'>at your fingertips</h1>
                                <h1 className='text-[#ba2427]'>at your fingertips</h1>
                                <h1 className='text-[#ba2427]'>at your fingertips</h1>
                                <h1 className='text-[#ba2427]'>at your fingertips</h1>
                            </div>
                        </span>
                    </div>

                    <div className='pb-10 pt-10 md:pt-0 px-5 md:px-0 md:absolute right-[30px] bottom-[50px] md:w-[440px]'>
                        <p  className='text-white font-Titillium text-[18px] '>Our F1-inspired training facility features state-of-the-art equipment and programming designed by some of the top minds in racing, plus pro-level development and coaching.</p>
                    </div>

                </div>
            </section>

            <section>
                <div className='w-[100vw] h-[100vh] block md:hidden'>
                    <div className='h-[15vh] flex justify-end'>
                        <img src={mobile_baseline_top} className='h-[100%]' alt="" />
                    </div>
                    <div className='h-[35vh] bg-[#BA2427] flex px-5'>
                        <div className='flex our-partners-right'>
                            <span className="text-white text-5xl">
                                <h1 className="">Baseline and Periodical Progress Testing</h1>
                            </span>
                            <p className='py-5 text-white text-xl'>App-based driver progress tracking, programming and mentoring</p>
                        </div>
                    </div>
                    <div className='h-[15vh]'>
                        <img src={mobile_baseline_bottom} className='h-[100%]' alt="" />
                    </div>

                    <div className='p-5 flex h-[35vh] border'>
                        <div className='flex our-partners-right '>

                            <span className="text-[#ba2427] text-4xl font-semibold min-[1666px]:text-7xl">
                                <h1 className="text-[#ba2427]">Exclusive, Personalized Programs</h1>
                            </span>

                            <p className='py-5 pr-24 text-xl'>Dedicated vetted physios in our network for pro/pro-am racing, track days & general wellness</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] h-[100vh] hidden md:flex'>

                    <div className='w-[60%] h-[100vh]'>

                        <div className='baseline-1-1 h-[50vh]'>
                            <img src={baseline_1_1} alt="" />

                        </div>

                        <div className='baseline-1-2 h-[50vh] flex pl-24'>

                            <div className='flex our-partners-right'>

                                <span className="text-white text-4xl font-semibold min-[1666px]:text-7xl">
                                    <h1 className="">Baseline and Periodical<br/>Progress Testing</h1>
                                </span>

                                <p className='py-5 text-white'>App-based driver progress tracking, programming and mentoring</p>
                            </div>

                        </div>

                    </div>

                    <div className='w-[40%] h-[100vh]'>

                        <div className='baseline-2-1 h-[50vh]'>
                            <img src={baseline_2_1} alt="" className='h-[100%]' />
                        </div>

                        <div className='baseline-2-2 h-[50vh] flex'>

                            <div className='flex our-partners-right '>

                                <span className="text-[#ba2427] text-4xl font-semibold min-[1666px]:text-7xl">
                                    <h1 className="text-[#ba2427]">Exclusive,<br/>Personalized Programs</h1>
                                </span>

                                <p className='py-5 pr-24'>Dedicated vetted physios in our network for pro/pro-am racing, track days & general wellness</p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


            <section>
                <div className='w-[100vw] h-[100vh] block md:hidden'>
                    <div className='h-[15vh] flex justify-end'>
                        <img src={mobile_baseline_top_black} className='h-[100%]' alt="" />
                    </div>
                    <div className='h-[35vh] bg-[#000] flex px-5'>
                        <div className='flex our-partners-right'>
                            <span className="text-white text-5xl">
                                <h1 className="">Pro-level Personal Training</h1>
                            </span>
                            <p className='py-5 text-white text-xl'>Physios, nutritionists, chiropractors/ posture doctors & more</p>
                        </div>
                    </div>
                    <div className='h-[15vh]'>
                        <img src={mobile_baseline_bottom_black} className='h-[100%]' alt="" />
                    </div>

                    <div className='p-5 flex border h-[35vh]'>
                        <div className='flex our-partners-right '>
                            <span className="text-[#ba2427] text-4xl font-semibold min-[1666px]:text-7xl">
                                <h1 className="text-[#ba2427]">Recovery and Treatment Area</h1>
                            </span>
                            <p className='py-5 pr-24 text-xl'>With infrared sauna, cold and hot plunge baths</p>
                        </div>
                    </div>

                    {/* <div className='flex our-partners-right items-center'>
                            <span className="text-[#ba2427] text-6xl font-semibold min-[1666px]:text-7xl">
                                <h1 className="text-[#ba2427]">WANT TO TRAIN<br/> LIKE THE PROS?</h1>
                            </span>
                            <button className="font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-6 py-[15px] w-[400px] mt-10">Explore the Performance Center</button>
                    </div> */}
                </div>

                <div className='w-[100vw] h-[100vh] hidden md:flex'>
                    <div className='w-[40%] h-[100vh]'>
                        <div className='train-1-1 h-[50vh] flex pl-24'>
                            <div className='flex our-partners-right '>
                                <span className="text-[#ba2427] text-4xl font-semibold min-[1666px]:text-7xl">
                                    <h1 className="text-[#ba2427]">Recovery and<br/> Treatment Area</h1>
                                </span>
                                <p className='py-5 pr-24'>With infrared sauna, cold and<br/> hot plunge baths</p>
                            </div>
                        </div>

                        <div className='train-1-2 h-[50vh] flex pl-24'>
                            <img src={train_1_2} className='w-[100%]' alt="" />
                        </div>

                    </div>

                    <div className='w-[60%] h-[100vh]'>

                        <div className='train-2-1 h-[50vh] flex pl-24'>
                            <div className='flex our-partners-right pl-24'>
                                <span className="text-[#ba2427] text-4xl font-semibold min-[1666px]:text-7xl">
                                    <h1 className="text-[#ba2427]">Pro-level<br/> Personal Training</h1>
                                </span>
                                <p className='py-5 pr-24 text-white'>Physios, nutritionists, chiropractors/<br/> posture doctors & more</p>
                            </div>
                        </div>

                        <div className='train-2-2 h-[50vh] flex pl-24'>
                            <div className='flex our-partners-right items-center'>
                                <span className="text-[#ba2427] text-6xl font-semibold min-[1666px]:text-7xl">
                                    <h1 className="text-[#ba2427]">WANT TO TRAIN<br/> LIKE THE PROS?</h1>
                                </span>
                                <button className="font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-6 py-[15px] w-[400px] mt-10">Explore the Performance Center</button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className=''>
                <OurPartners/>
            </section>

            <section className='bg-black'>
                <Footer/>
            </section>
        </div>
        </>
    );
};

export default Performance;
