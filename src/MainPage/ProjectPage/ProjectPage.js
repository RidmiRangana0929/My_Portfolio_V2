import React from 'react'
import LongCard from '../../compornent/LongCard/LongCard';
import ShortCard from '../../compornent/ShortCard/ShortCard';
import './ProjectStyle.css'

export const ProjectPage = () => {
    return (
        <div id='project' className='project'>
            <div className='headerContainer'>
                <h1 className='header' id='resumeTitle'>PROJECTS</h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000" className='subHeader'>My Work</h2>
                <div className='underline'></div>
            </div>

            <div id='cardContainer'>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className='cardColumn' id='cardColumn1'>
                    <div className='longCard'>
                        <LongCard id={"carRent"} cardHeader={"Car Rental Web Application"} url={"https://github.com/RidmiRangana0929/CarRentalSystem_WebApplication"} />
                    </div>
                    <div className='longCard'>
                        <LongCard id={"stockManagement"} cardHeader={"Stock Managment System"} url={"https://github.com/RidmiRangana0929/CraftShopManagementSystem"} />
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" className='cardColumn' id='cardColumn2'>
                    <div className='shortCard'>
                        <ShortCard id={"studentManagement"} cardHeader={"Student Managment System"} url={"https://github.com/RidmiRangana0929/StudentManagementSystem-IJSE-"} />
                    </div>
                    <div className='longCard'>
                        <LongCard id={"carPark"} cardHeader={"Car Parking System"} url={"https://github.com/RidmiRangana0929/ParkingSystem"} />
                    </div>
                    <div className='shortCard'>
                        <ShortCard id={"hotel"} cardHeader={"Hotel Managment System"} url={"https://github.com/RidmiRangana0929/HotelReservationSystem"} />
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2500" className='cardColumn' id='cardColumn3'>
                    <div className='longCard'>
                        <LongCard id={"superMarket"} cardHeader={"Supermaeket System"} url={"https://github.com/RidmiRangana0929/LayeredArchitectureCW"} />
                    </div>
                    <div className='shortCard'>
                        <ShortCard id={"hostel"} cardHeader={"Hostel Managment System"} url={"https://github.com/RidmiRangana0929/D24HostelManagementSystem"} />
                    </div>
                </div>
            </div>
            <button className='button' id='seeMore' >See More</button>

        </div>
    )
}
