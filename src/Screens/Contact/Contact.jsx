import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useState } from 'react';
import '../../Screens/Home/Home.css';

// Assets
import Logo from '../../assets/RAFA-Racing-Mark-Wht 1.png';
import close_menu_icon from '../../assets/close-menu.png';
import open_menu_icon from '../../assets/open-menu.png';
import instagram from '../../assets/instagram.png';
import instagram_black from '../../assets/instagram-black.png';
import youtube_black from '../../assets/youtube-black.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import tiktok_black from '../../assets/tiktok-black.png';


const Contact = () => {

    const [show, setShow] = useState(false);

    const changeState = () => {
        setShow(!show);
    };
   
    return (
        <>
        <div className='contact-page container overflow-x-hidden'>
            <section className='about-hero h-auto'>
                <div className='bg-transparent absolute w-[100vw] z-[100]'>
                    <nav className='hidden md:flex text-xl py-5 justify-between px-24 text-white'>
                        <a href="/"><img src={Logo} alt="Rafa" className='h-[30px]'/></a>
                        <a href="/about"><p className='font-Titillium text-[14px]'>About</p></a>
                        <a href="/amenities"><p className='font-Titillium text-[14px]'>Amenities & Services</p></a>
                        <a href="/performance"><p className='font-Titillium text-[14px] text-black'>Performance Center</p></a>
                        <a href="/contact"><p className='font-Titillium text-[14px] text-black'>Contact</p></a>
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

                <div className='md:flex w-[100vw] md:h-[100vh]'>
                    <div className='md:w-[60%] w-[100%] bg-[#E72427] flex flex-col justify-center md:px-24 px-5 max-[768px]:h-[40vh] left-section'>

                        <div className='absolute overlay w-[50%] max-[768px]:hidden'></div>

                        <div className="flex flex-col gap-5 overflow-hidden  mb-[-18px] ultimate-escape">
                            <div className="text-white text-6xl max-[768px]: text-[2rem]">
                                <div className="">
                                    <h1 className="text-white leading-none">Have a question about the RAFA Racing Club?</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col py-10 ultimate-escape max-[768px]:hidden">
                            <div className="text-white flex family-text">
                                <p>For brand partnership inquiries: email@emailaddress.com<br/>
                                For membership inquiries: email@emailaddress.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col pt-10 ultimate-escape max-[768px]:hidden">
                            <div className="text-white flex family-text">
                                <p>5236 Brittmoore Rd
                                Houston, Texas 77041<br/>
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-10 mt-24 ultimate-escape  max-[768px]:hidden'>
                        <div>
                                <a href="https://www.instagram.com/rafaracing.club"><img src={instagram_black} alt="Instagram" /></a>
                            </div>

                            <div>
                                <a href="https://www.youtube.com/@rafaracingclub"><img src={youtube_black} alt="Youtube" /></a>
                            </div>

                            <div>
                                <a href="https://www.tiktok.com/@rafaracing.club"><img src={tiktok_black} alt="Tiktok" /></a>
                            </div>
                        </div>

                    </div>
                    <div className='w-[40%]  max-[768px]:w-[100%] bg-white  flex flex-col justify-center px-5 md:px-24 pt-5'>
                    
                        <form name="contact"  id="contactForm" method="POST" data-netlify="true"   data-netlify-debug="true"  netlify-honeypot="bot-field">  
                        <input type="hidden" name="form-name" value="contact" />

                            <div className='block gap-3 md:flex'>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium">First name</label>
                                    <input type="text" name='first_name' id="first_name" className="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="First name" required />
                                </div>

                                <div className="mb-5">
                                    <label for="last_name" className="block mb-2 text-sm font-medium">Last name</label>
                                    <input type="text" name='last_name' id="last_name" className="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="Last name" required />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label for="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email" id="email" name='email' className="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="you@company.com" required />
                            </div>

                            <div className="mb-5">
                                <label for="phone_number" className="block mb-2 text-sm font-medium">Phone number</label>
                                <input type="tel" id="phone_number" name='phone_number' className="border border-gray-300 text-sm rounded-lg block w-full p-2.5" placeholder="+1 (555) 000-0000" required />
                            </div>
                           
                            <div className="mb-5">
                                <label for="Message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 " placeholder="Leave us a message..."></textarea>
                            </div>
                           

                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input id="agree" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="agree" className="ms-2 text-sm font-medium ">You agree to our friendly privacy policy</label>
                            </div>

                            <button type="submit" className="font-Titillium uppercase tracking-[1px] text-[12px] font-bold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-10 py-4 mt-[10px] w-[100%]">SEND MESSAGE</button>
                        </form>

                        <div className="flex flex-col pt-5 ultimate-escape md:hidden">
                            <div className="flex family-text">
                                <p>For brand partnership inquiries: <br/>email@emailaddress.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col pt-5 ultimate-escape md:hidden">
                            <div className="flex family-text">
                                <p>For membership inquiries: <br/>email@emailaddress.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col pt-5 ultimate-escape md:hidden">
                            <div className="flex family-text">
                                <p> 5236 Brittmoore Rd<br/>
                               
                                Houston, Texas 77041</p>
                            </div>
                        </div>

                        <div className='flex justify-between py-5 ultimate-escape  md:hidden'>
                            <div>
                                <a href="https://www.instagram.com/rafaracing.club"><img src={instagram_black} alt="Instagram" /></a>
                            </div>

                            <div>
                                <a href="https://www.youtube.com/@rafaracingclub"><img src={youtube_black} alt="Youtube" /></a>
                            </div>

                            <div>
                                <a href="https://www.tiktok.com/@rafaracing.club"><img src={tiktok_black} alt="Tiktok" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Contact;
