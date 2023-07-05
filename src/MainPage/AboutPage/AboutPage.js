import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ScrollTrigger from 'react-scroll-trigger';
import './AboutStyle.css'

export const AboutPage = () => {
    const [counterOn, setCounterOn] = useState(false);
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id='about' className='about'>
            <div className='headerContainer'>
                <h1 className='header' id='aboutTitle'>ABOUT ME</h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000" className='subHeader'>Know Me More</h2>
                <div className='underline'></div>
            </div>

            <div id='aboutPageLayout'>
                <div id='greeting'>
                    <h3 id='greetingPart1'>I'm</h3> <h3 id='greetingPart2'>Ridmi Silva</h3> <h3 id='greetingPart3'>,</h3>
                </div>
                <div id='distription'>
                    <div id='paragraph'>
                        <p id='p'>In present I studying as a student at IJSE (Institute of Software Engineering) in Sri Lanka.
                            I'm following a degree program in Computer Science.
                            The subjects I am currently focusing on are software development, web development and UIUX designing.
                            <br /><br />
                            I love to explore about new technologies.
                            Therefore self-study is my personal favorite.
                            Also I like to improve my skills by working on different types of projects.</p>
                    </div>
                    <div id='personalDetails'>
                        <div data-aos="fade-up" data-aos-duration="2000" className='personalDetailsGrid' id='personalDetailsGrid1'>
                            <div className='title'><h3 id='nameTitle'>Full Name</h3></div>
                            <div className='details'><h3 id='name'>Sinhara Ridmi Rangana Silva</h3></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className='personalDetailsGrid' id='personalDetailsGrid2'>
                            <div className='title'><h3 id='birthdayTitle'>Birthday</h3></div>
                            <div className='details'><h3 id='birthday'>29/09/2000</h3></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className='personalDetailsGrid' id='personalDetailsGrid3'>
                            <div className='title'><h3 id='emailTitle'>Email</h3></div>
                            <div className='details'><h3 id='email'>ridmirangana1429@gmail.com</h3></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className='personalDetailsGrid' id='personalDetailsGrid4'>
                            <div className='title'><h3 id='phoneTitle'>Phone</h3></div>
                            <div className='details'><h3 id='phone'>+94 (70) 327 4953</h3></div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className='personalDetailsGrid'>
                            <div className='title'><h3 id='cityTitle'>City</h3></div>
                            <div className='details'><h3 id='city'>Kalutara, Sri Lanka</h3></div>
                        </div>
                        <div>
                            <div>
                                <button className='button' id='downloadCv'>Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='calculation'>
                    <div id='experience'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Years Experience</h4>
                    </div>
                    <div id='projects'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={8} duration={2} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Projects Done</h4>
                    </div>
                    <div id='clients'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={0} duration={2} delay={0} />}
                                +
                            </h1>
                        </ScrollTrigger>
                        <h4 className='info'>Happy Clients</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
