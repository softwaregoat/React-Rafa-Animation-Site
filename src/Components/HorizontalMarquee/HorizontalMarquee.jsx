import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const HorizontalMarquee = () => {

    useGSAP(() => {
        gsap.to("#TextMarquee", {
            transform: "translateX(-100%)",
            duration: 15,
            repeat: -1,
            ease: "none"

        })
    })


    return (
        <>
            <div className='flex'>
                <div className='whitespace-nowrap w-[100%] flex overflow-hidden'>
                    <div id='TextMarquee' className='flex overflow-x-hidden text-white text-[11px] justify-center gap-[70px] font-Titillium'>
                        <p>LOS ANGELES</p>
                        <p>MADRID</p>
                        <p>ABU DHABI</p>
                        <p>MEXICO CITY</p>
                        <p>MELBOURNE</p>
                        <p>MIAMI</p>
                        <p>MILAN</p>
                        <p>MONACO</p>
                        <p>NEW YORK</p>
                        <p>JEDDAH</p>
                        <p>LONDON</p>
                        <p>DUBAI</p>
                        <p> </p>
                    </div>
                    <div id='TextMarquee' className='flex overflow-x-hidden text-white text-[11px] justify-center gap-[70px] font-Titillium'>
                        <p>LOS ANGELES</p>
                        <p>MADRID</p>
                        <p>ABU DHABI</p>
                        <p>MEXICO CITY</p>
                        <p>MELBOURNE</p>
                        <p>MIAMI</p>
                        <p>MILAN</p>
                        <p>MONACO</p>
                        <p>NEW YORK</p>
                        <p>JEDDAH</p>
                        <p>LONDON</p>
                        <p>DUBAI</p>
                        <p> </p>
                    </div>
                    <div id='TextMarquee' className='flex overflow-x-hidden text-white text-[11px] justify-center gap-[70px] font-Titillium'>
                        <p>LOS ANGELES</p>
                        <p>MADRID</p>
                        <p>ABU DHABI</p>
                        <p>MEXICO CITY</p>
                        <p>MELBOURNE</p>
                        <p>MIAMI</p>
                        <p>MILAN</p>
                        <p>MONACO</p>
                        <p>NEW YORK</p>
                        <p>JEDDAH</p>
                        <p>LONDON</p>
                        <p>DUBAI</p>
                        <p> </p>
                    </div>

                </div>
            </div>

        </>

    )
}

export default HorizontalMarquee