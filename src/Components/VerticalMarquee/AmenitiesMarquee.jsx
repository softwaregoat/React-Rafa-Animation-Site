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
            <div  id='VerTextMarquee' className='relative h-[590px] overflow-hidden min-[1360px]:h-[530px] min-[1666px]:h-[600px] '>
                <div className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>F1 Hospitality and VIP Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Consignment Services</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Dealership Discounts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Car Storage, Rentals, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Transportation - Global</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Track Events and RAFA</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Track Days</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Series Timeshares</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Coaching and Development</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Tech Support at Track</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>In-car Cameras and VBox</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Service, Maintenance, and Parts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Supplements</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Peptide and Hormone Concierge Service</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Meal Plan Partners</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Driver Development Program</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Academy</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                <h6 className='text-white font-Titillium text-[19px] font-semibold'>F1 Hospitality and VIP Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Consignment Services</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Dealership Discounts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Car Storage, Rentals, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Transportation - Global</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Track Events and RAFA</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Track Days</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Series Timeshares</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Coaching and Development</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Tech Support at Track</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>In-car Cameras and VBox</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Service, Maintenance, and Parts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Supplements</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Peptide and Hormone Concierge Service</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Meal Plan Partners</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Driver Development Program</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Academy</h6>
                </div>
                <div id='' className='marque-content flex flex-col gap-1 overflow-hidden overflow-y-hidden'>
                <h6 className='text-white font-Titillium text-[19px] font-semibold'>F1 Hospitality and VIP Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Consignment Services</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Dealership Discounts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Car Storage, Rentals, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Transportation - Global</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Track Events and RAFA</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Track Days</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Series Timeshares</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Coaching and Development</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Tech Support at Track</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>In-car Cameras and VBox</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Equipment</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Service, Maintenance, and Parts</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Bodywork, Upgrades, and</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Detailing</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Content Packages</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>8Twelve and Over a Dozen</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Partner Brands</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>SIM Purchases</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Exclusive Private Events</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Domestic and International Travel</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>VIP Travel Experiences</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Private Training Sessions</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Classes</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Supplements</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Peptide and Hormone Concierge Service</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Meal Plan Partners</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Driver Development Program</h6>
                    <h6 className='text-white font-Titillium text-[19px] font-semibold'>Racing Academy</h6>
                </div>
            </div>
            <div className='marque-bottom w-[100%] h-[150px] absolute bottom-0 bg-gradient-to-t from-[#000] to-[#0e0e0e00]  max-[765px]:bottom-[4rem]'></div>
            <div className='marque-bottom w-[100%] h-[150px] absolute top-0 bg-gradient-to-b from-[#000] to-[#0e0e0e00]  max:[390px]:w-[30%]'></div>

            {/* BUTTON */}
            {/* <div className='absolute'>
                <button className='font-Titillium uppercase tracking-[1px] text-[13px] font-semibold  bg-gradient-to-r from-[#811416] to-[#ba2427] text-white rounded-3xl px-6 py-[15px] ml-12'>See All Amenities And Services</button>
            </div> */}
        </>
    )
}

export default VerticalMarquee