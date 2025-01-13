import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import '../../Screens/Home/Home.css';


const VerticalMarquee = () => {

    useGSAP(() => {
        gsap.to("#VerTextMarquee .marque-content", {
            y: "-100%",
            duration: 15,
            // opacity:0,
            // yoyo: true,
            repeat: -1, //CONTINOUSLY LOOP MOVING
            ease: "none", //REMOVE END OF THE LOOP SLOW PROBLEM 
        })

    }, [])



    return (
        <>
            <div className='marque-top'></div>
            <div  id='VerTextMarquee' className=' h-[590px] overflow-hidden min-[1360px]:h-[530px] min-[1666px]:h-[600px] '>
                <div className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Classes</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Supplements</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Classes</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Supplements</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Classes</h6>
                    <h6 className='text-black font-Titillium text-[1.1rem] '>Supplements</h6>
                </div>
            </div>
            <div className='marque-bottom'></div>

            {/* BUTTON */}
            <div className='absolute'>
                <button className='font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-6 py-[15px] ml-12'>See All Amenities And Services</button>
            </div>
        </>
    )
}

export default VerticalMarquee