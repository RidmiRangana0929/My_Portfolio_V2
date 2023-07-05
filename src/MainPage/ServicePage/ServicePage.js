import React from 'react'
import ServiceBox from '../../compornent/ServiceBox/ServiceBox'
import './ServiceStyle.css'

export const ServicePage = () => {
    return (
        <div id='service' className='service'>
            <div className='headerContainer'>
                <h1 className='header' id='resumeTitle'>SERVICES</h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000" className='subHeader'>What I Do</h2>
                <div className='underline'></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" id='mainContainer1' className='mainContainer'>
                <ServiceBox
                    id={"webDevelop"}
                    serviceTitle={"Web Development"}
                    serviceInfo={"Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser."}
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" id='mainContainer2' className='mainContainer'>
                <ServiceBox
                    id={"softDevelop"}
                    serviceTitle={"Software Development"}
                    serviceInfo={"Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software."}
                />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" id='mainContainer3' className='mainContainer'>
                <ServiceBox
                    id={"uiux"}
                    serviceTitle={"UIUX Designing"}
                    serviceInfo={"User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style."}
                />
            </div>
        </div>
    )
}
