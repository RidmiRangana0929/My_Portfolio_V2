import React, { useRef } from 'react'
import { HomePage } from './HomePage/HomePage';
import { AboutPage } from './AboutPage/AboutPage';
import { ResumePage } from './ResumePage/ResumePage';
import { ProjectPage } from './ProjectPage/ProjectPage';
import { ServicePage } from './ServicePage/ServicePage';
import { ContactPage } from './ContactPage/ContactPage';
import 'aos/dist/aos.css';
import './Style.css'



export const MainPage = () => {
    
    const homePage = useRef();
    const aboutPage = useRef();
    const resumePage = useRef();
    const projectPage = useRef();
    const servicePage= useRef();
    const contactePage= useRef();

    const homeHandleClick = (elmRef) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const aboutHandleClick = (elmRef) => {
        window.scrollTo({ top: 760, behavior: 'smooth' });
    };
    const resumeHandleClick = (elmRef) => {
        window.scrollTo({ top: 1520, behavior: 'smooth' });
    };
    const projectHandleClick = (elmRef) => {
        window.scrollTo({ top: 3645, behavior: 'smooth' });
    };
    const serviceHandleClick = (elmRef) => {
        window.scrollTo({ top: 5025, behavior: 'smooth' });
    };
    const contactHandleClick = (elmRef) => {
        window.scrollTo({ top: 6000, behavior: 'smooth' });
    };


    return (
        <div>

            {/* navigation bar... */}

            <div className='navBar'>
                <div className='btnGrid'>
                    <button className='navBtn' onClick={homeHandleClick}>Home</button>
                    <button className='navBtn' onClick={aboutHandleClick}>About</button>
                    <button className='navBtn' onClick={resumeHandleClick}>Resume</button>
                    <button className='navBtn' onClick={projectHandleClick}>Projects</button>
                    <button className='navBtn' onClick={serviceHandleClick}>Services</button>
                    <button className='navBtn' onClick={contactHandleClick}>Contacts</button>
                </div>
                <div className='socialMediaIconGrid'>
                    <div className='socialMedia' id='facebook'></div>
                    <div className='socialMedia' id='instagrame'></div>
                    <div className='socialMedia' id='whatsapp'></div>
                    <div className='socialMedia' id='slack'></div>
                    <div className='socialMedia' id='github'></div>
                </div>
            </div>


            {/* home page... */}
            <HomePage ref={homePage}/>



            {/* about page... */}
            <AboutPage ref={aboutPage}/>



            {/* resume page... */}
            <ResumePage ref={resumePage}/>



            {/* project page... */}
            <ProjectPage ref={projectPage}/>
            


            {/* service page... */}
            <ServicePage  ref={servicePage}/>



            {/* contact page... */}  
            <ContactPage ref={contactePage}/> 

        </div>
    )
}
