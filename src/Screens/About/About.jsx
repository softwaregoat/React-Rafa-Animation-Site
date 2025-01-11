import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import React, { useEffect, useState, useRef, useCallback } from 'react';
import '../../Screens/Home/Home.css';

// COMPONENTS
import MainNavigation from '../../Components/Navbar/Navigation.jsx';
import OurPartners from '../../Components/OurPartners/OurPartners.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
// Assets
import rafa_logo from '../../assets/RAFA-Racing-Mark-Wht 1.png';
import slide_up from '../../assets/slide-up-1.png';
import slide_up_2 from '../../assets/slide-up-2.png';
import Jem from '../../assets/Jem.png';
import Cameron from '../../assets/Cameron.png';
import Caroline from '../../assets/Caroline.png';
import John from '../../assets/John.png';
import Ian from '../../assets/Ian.png';
import Paige from '../../assets/Paige.png';
import Rafael from '../../assets/Rafael.png';
import black_rafa from '../../assets/black-rafa.png';



const About = () => {
    
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        pagination: true,
        injectStyles: [
            `
            .swiper-button-prev {
                background-image: url("../../assets/before.png")!important;
                }

                .swiper-button-next {
                background-image: url("../../assets/after.png")!important;
                }
              .swiper-button-next,
              .swiper-button-prev {
                top:unset;
                bottom:13%;
                height: 20px;
                color:black;
              }
                @media (max-width: 768px){
                .swiper-button-prev{
                    left: 0.5rem!important;
                }
                .swiper-button-next{
                    right: 0.5rem!important;
                }
                .swiper-button-next, .swiper-button-prev{
                    bottom: 34.5% !important;
                }

                }
            .swiper-button-prev{
                left: 2.5rem;
            }
              .swiper-button-next{
                right: 2.5rem;
               }
             .swiper-button-next::after,
              .swiper-button-prev::after {
                content: "";
              }
    
              .swiper-pagination-bullet{
                display:none;
              }
          `,
          ],
        };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    
    return (
        <>
        <div className='about-page container overflow-x-hidden'>
            <section className='about-hero bg-[#e72427] '>
                <MainNavigation />
                <div className='md:flex md:px-10 px-5 mt-[70px] h-[90%]'>

                    <div className='md:w-[40%] overflow-hidden about-hero-gif pb-10 h-[40%] md:h-[100%]'></div>

                    <div className='md:w-[60%] middle-div md:pl-24 py-5'>
                        <div className='flex flex-col gap-5 overflow-hidden'>
                            <div className='md:text-[122px] md:h-[145px] text-[80px] h-[90px]'>
                                <div className="">
                                    <h1 className='text-white'>Race</h1>
                                    <div className='border-bottom-1st h-[1px] w-[60px] md:w-[100px] bg-white'></div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 overflow-hidden'>
                            <div className='text-white flex items-center'>
                                <div className="md:text-[122px] md:h-[145px] text-[80px] h-[90px]">
                                    <h1 className='text-white'>As</h1>
                                    <div className='border-bottom-1st h-[1px] w-[60px] md:w-[100px] bg-white'></div>
                                </div>
                                <div className='hidden md:block pl-10 text-[18px]'>
                                    <p>We're a group of diehard racing enthusiasts on a mission to create community, access, and experiences that the world of motorsports has never seen.</p>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-col gap-5 overflow-hidden'>
                            <div className='md:text-[122px] md:h-[145px] text-[80px] h-[90px]'>
                                <div className="">
                                    <h1 className='text-white'>Family</h1>
                                    <div className='border-bottom-1st h-[1px] w-[60px] md:w-[100px] bg-white'></div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 overflow-hidden'>
                            <div className='text-white flex items-center'>
                                <div className='md:text-[122px] md:h-[145px] text-[80px] h-[100px]'>
                                    <div className="">
                                        <h1 className='text-white'>Always</h1>
                                        <div className='border-bottom-1st h-[1px] w-[60px] md:w-[100px] bg-white'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col overflow-hidden'>
                            <div className='text-white flex justify-end'>
                                <div className='text-white flex family-text hidden md:block'>
                                    <div className='pl-10 text-[18px] w-[400px]'>
                                        <p>That's what led us to create the RAFA Racing Club, a place where seasoned drivers and curious enthusiasts alike can build community and experience the thrill and camaraderie of racing in real life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='md:hidden text-[18px] text-white'>
                            <p>We're a group of diehard racing enthusiasts on a mission to create community, access, and experiences that the world of motorsports has never seen.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='section-normal'>
                <OurPartners/>
            </section>

            <section>
                <div className='h-[100vh] block relative'>
                    <div className='flex bg-[#BA2427] absolute top-0 justify-between'>
                        <img src={black_rafa} className='md:hidden absolute top-0 left-[50%]  mt-5 translate-x-[-50%] w-[110px] h-auto' alt="" />
                        <div className='md:w-[40%]'>
                            <img src={slide_up} alt="" className='hidden md:block h-[60vh]'/>
                            <img src={slide_up_2} alt="" className='md:hidden h-[60vh] w-auto' />
                        </div>

                        <div className='w-[60%] hidden md:flex flex-col justify-center px-[150px]'>
                            <img src={rafa_logo} alt="" className='w-[100%] h-auto' />
                        </div>
                    </div>
                    <swiper-container ref={swiperRef} init='false'>
                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>
                            <div className=''>
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Jem} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Jem</h1></div>
                                        <div className='text-black'><h1>Hepworth</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Jem} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>
                            <div className=''>
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Cameron} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Cameron</h1></div>
                                        <div className='text-black'><h1>Lawrence</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Cameron} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>
                            <div className=''>
                               
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Caroline} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Caroline</h1></div>
                                        <div className='text-black'><h1>Candas</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Caroline} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>
                            <div className=''>
                               
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={John} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>John</h1></div>
                                        <div className='text-black'><h1>Lancaster</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={John} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>

                            <div className=''>
                                
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Ian} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Ian</h1></div>
                                        <div className='text-black'><h1>Porter</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Ian} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>

                            <div className=''>
                               
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Paige} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Paige</h1></div>
                                        <div className='text-black'><h1>Morales</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Paige} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>

                        <swiper-slide>
                            <div className='h-[60vh] bg-transparent'></div>

                            <div className=''>
                               
                                <div className='md:flex justify-between items-center px-10 h-[40vh]'>
                                    <img src={Rafael} className='md:hidden absolute top-[10vh] left-[50%]  translate-x-[-50%] h-[50vh] w-auto' alt="" />
                                    <div className='text-[38.81px] font-semibold my-5'>
                                        <div className='text-[#BA2427]'><h1>Rafael</h1></div>
                                        <div className='text-black'><h1>Martinez</h1></div>
                                    </div>

                                    <div className='w-[30vw]'></div>

                                    <div className='md:w-[420px] md:text-[22px] text-[18px] pb-2'>
                                        <p>One club. One team. One family. The RAFA Racing Team has already made a name for themselves as a team to watch, with x wins and x podiums over the last two seasons. And they show no signs of stopping.</p>
                                    </div>

                                    <button class="w-full md:w-[280px] font-Titillium uppercase text-[14px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-[50px] py-[10px] h-fit my-5">Explore Rafa Racing Team</button>
                                </div>

                                <div className='relative hidden md:block'>
                                    <img src={Rafael} className='absolute bottom-0 left-[15%] h-[90vh] w-auto' alt="" />
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </section>

            <section className='bg-black'>
                <Footer/>
            </section>
        </div>
        </>
    );
};

export default About;
