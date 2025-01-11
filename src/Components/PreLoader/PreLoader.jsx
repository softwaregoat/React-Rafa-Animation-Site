import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Logo from '../../assets/RAFA Racing Club.gif'

const PreLoader = () => {


    
    useGSAP(() => {
        gsap.to(
            "#FadeOut", {
                // opacity: 0,
                duration: 1,
            }
        )
    }, [])
    return (
        <>
            <div id='FadeOut'>
                <div className='min-h-screen bg-[#E72427] text-center flex justify-center items-center'>
                    <img className='bg-transparent w-[80vw] object-cover' src={Logo} alt="" />
                    {/* <video className='w-[50%] bg-transparent' src={Logo} muted loop ></video> */}
                </div>
            </div>

        </>
    )
}

export default PreLoader