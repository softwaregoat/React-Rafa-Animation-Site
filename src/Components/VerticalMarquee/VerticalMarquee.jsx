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
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Supplements</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Supplements</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>In-car Cameras/ VBox</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Service, Maintenance, & Parts</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, &</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-black font-Titillium text-[19px] font-semibold'>Supplements</h6>
                </div>
            </div>
            <div className='marque-bottom'></div>

            {/* BUTTON */}
            <div className='absolute'>
                <button className='font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#E72427] text-white rounded-3xl px-6 py-[15px] ml-12'>See All Amenities And Services</button>
            </div>
        </>
    )
}

export default VerticalMarquee