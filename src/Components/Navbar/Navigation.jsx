import React, { useEffect, useState } from 'react';
import Logo from '../../assets/RAFA-Racing-Mark-Wht 1.png';
import close_menu_icon from '../../assets/close-menu.png';
import open_menu_icon from '../../assets/open-menu.png';
// import Logo from '../../assets/RAFA-Racing-Mark-Wht 1.png'
import { useRef } from 'react';

const MainNavigation = () => {
      
  const [show, setShow] = useState(false);

  const changeState = () => {
      setShow(!show);
  };
  
  const videoRef = useRef(null); 
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  useEffect(() => {
    // if (videoRef.current) {
    //   videoRef.current.play(); 

    //   const timer = setTimeout(() => {
    //     if (videoRef.current) {
    //       videoRef.current.pause(); 
    //       setIsVideoFinished(true); 
    //     }
    //   }, 2200); 

      
    //   return () => clearTimeout(timer);
    // }
  }, []);

  return (
    <>
      {/* <div className='bg-transparent'>
          <nav className='flex text-xl py-5 justify-between px-24 text-white'>
              <a href="/"><img src={Logo} alt="Rafa" className='h-[30px]'/></a>
              <a href="/about"><p className='font-Titillium text-[14px]'>About</p></a>
              <a href="/amenities"><p className='font-Titillium text-[14px]'>Amenities & Services</p></a>
              <a href="/performance"><p className='font-Titillium text-[14px]'>Performance Center</p></a>
              <a href="/contact"><p className='font-Titillium text-[14px]'>Contact</p></a>
          </nav>
      </div> */}

      <div className='bg-transparent absolute w-[100vw] top-0 z-[100]'>
        <nav className='hidden md:flex text-xl py-5 justify-between px-24 text-white'>
            <a href="/"><img src={Logo} alt="Rafa" className='h-[30px]'/></a>
            <a href="/about"><p className='font-Titillium text-[14px]'>About</p></a>
            <a href="/amenities"><p className='font-Titillium text-[14px]'>Amenities & Services</p></a>
            <a href="/performance"><p className='font-Titillium text-[14px]'>Performance Center</p></a>
            <a href="/contact"><p className='font-Titillium text-[14px]'>Contact</p></a>
        </nav>

        <nav className="block md:hidden fixed">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-8" alt="Rafa" />
                </a>
                <button onClick={() => {changeState();}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white fixed right-0" aria-controls="navbar-default" aria-expanded="false">
                    <img src={open_menu_icon} style={{maxWidth:'unset'}} className={show?'hidden':''} alt="" />
                    <img src={close_menu_icon} style={{maxWidth:'unset'}} className={!show?'hidden':''} alt="" />
                </button>

                
                <div className={show?'w-full md:block md:w-auto bg-[#E72427] z-[20]': 'hidden'} id="navbar-default" >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  text-[30px]">
                        <li>
                        <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="about">About</a>
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
    </>
  );
}

export default MainNavigation;
