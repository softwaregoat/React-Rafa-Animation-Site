import React, { useEffect, useState } from 'react';
import logo_anim from '../../assets/Logot.svg';
import Logo from '../../assets/RAFA-Racing-Mark-Wht 2.png'
import { useRef } from 'react';


const Navbar = () => {
  
  const videoRef = useRef(null); 

  return (
    <>
      <img src={Logo} alt="" className='mobile logo py-5' />
      <div id='logo-top-bar' className='bg-[#E72427] px-20 '>
        <div className=' w-[210px] max-[1280px]:w-[180px]'>
          <img src={logo_anim} alt="" /> 
        </div>
      </div>
    </>
  );
}

export default Navbar;
