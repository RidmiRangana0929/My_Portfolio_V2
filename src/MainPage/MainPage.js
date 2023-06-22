import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import DetailBox from '../compornent/DetailBox/DetailBox'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './Style.css'
import Aos from 'aos';



export const MainPage = () => {
    const [counterOn,setCounterOn] = useState(false);
    useEffect (()=>{
        Aos.init();
    },[])

    return (
        <div>

            {/* navigation bar... */}

            <div className='navBar'>
                <div className='btnGrid'>
                    <button className='navBtn'>Home</button>
                    <button className='navBtn'>About</button>
                    <button className='navBtn'>Resume</button>
                    <button className='navBtn'>Projects</button>
                    <button className='navBtn'>Services</button>
                    <button className='navBtn'>Contacts</button>
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

            <div className='homeImg'>
                <div className='home'>
                    <div id='textBox'>
                    <h3 id='welcome'>Welcome</h3>
                    <div className='gap'></div>
                    <div id='typewriter'>
                        I'm a
                        <Typewriter
                            options={{
                                strings: [
                                "Software Developer.",
                                "Web Developer.",
                                "UI/UX Designer."
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                            />    
                    </div>
                    <div className='gap'></div>
                    <button id='hireMe' className='button'>Hire Me</button>
                    </div>
                </div>
            </div>


            {/* about page... */}

            <div className='about'>
                <div className='headerContainer'>
                    <h1 className='header' id='aboutTitle'>ABOUT ME</h1>
                    <h2 className='subHeader'>Know Me More</h2>
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
                            <br/><br/>
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
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={2} duration={2} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Years Experience</h4>
                        </div>
                        <div id='projects'>
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={8} duration={2} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Projects Done</h4>
                        </div>
                        <div id='clients'>
                            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                            <h1 className='count'>
                                {counterOn && <CountUp start={0} end={0} duration={2} delay={0}/>}
                                +
                            </h1>
                            </ScrollTrigger>
                            <h4 className='info'>Happy Clients</h4>
                        </div>
                    </div>
                </div>
            </div>


            {/* resume page... */}

            <div className='resume'>
                <div className='headerContainer'>
                    <h1 className='header' id='resumeTitle'>SAMMARY</h1>
                    <h2 className='subHeader'>Resume</h2>
                    <div className='underline'></div>
                </div>

                <div id='mainLine'></div>

                <div className='timeContainer' id='timeContainer1'>
                    <div className='time'><h3 className='timePeriod'>2021 - 2022</h3></div>
                    <div className='time'><h3 className='timePeriod'>2011 - 2016</h3></div>
                </div>
                <div className='timeContainer' id='timeContainer2'>
                    <div className='time'><h3 className='timePeriod'>2021 - 2023</h3></div>
                    <div className='time'><h3 className='timePeriod'>2016 - 2020</h3></div>
                </div>

                <div className='circleContainer' id='circleContainer1'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                </div>
                <div className='circleContainer' id='circleContainer2'>
                    <div className='circle'></div>
                    <div className='circle'></div>
                </div>
                
                <div className='boxContainer' id='boxContainer1'>
                    <div data-aos="fade-right" data-aos-duration="2000" className='box'>
                        <DetailBox id={"ijse"} 
                        qualification={"Bsc (Hons) in Computer Science"}
                        institute={"Institute of Software Engineering"}
                        location={"Panadura"}
                        />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className='box'>
                    <DetailBox id={"princess"} 
                        qualification={"Advance Level"}
                        institute={"Princess of Wales' College"}
                        location={"Moratuwa"}
                        />
                    </div>
                </div>
                <div className='boxContainer' id='boxContainer2'>
                    <div data-aos="fade-left" data-aos-duration="2000" className='box'>
                    <DetailBox id={"esoft"} 
                        qualification={"Diploma in Information Technology"}
                        institute={"ESOFT Metro Campus"}
                        location={"Galle"}
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='box'>
                    <DetailBox id={"siridhamma"} 
                        qualification={"Ordinary Level"}
                        institute={"Siridhamma College"}
                        location={"Galle"}
                        />
                    </div>
                </div>

                    <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer1'>
                        <h3 className='skillType'>Languages and Databases</h3>
                        <div className='logoContainer' id='logoContainer1'>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo1'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo2'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo3'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo4'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo5'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo6'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo7'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo8'></div></div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer2'>
                        <h3 className='skillType'>Frameworks and Libraries</h3>
                        <div className='logoContainer' id='logoContainer2'>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo9'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo10'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo11'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo12'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo13'></div></div>   
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer3'>
                        <h3 className='skillType'>Tools</h3>
                        <div className='logoContainer' id='logoContainer3'>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo14'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo15'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo16'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo17'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo18'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo19'></div></div>
                            <div className='subLogoContainer'><div className='skillLogo' id='skillLogo20'></div></div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className='skillContainer' id='skillContainer4'>
                        <h3 className='skillType'>Architectures</h3>
                            <div id='skillType'>
                                <h3 className='architecture' id='architecture1'>MVC Architectures</h3>
                                <h3 className='architecture' id='architecture1'>,</h3>
                                <h3 className='architecture' id='architecture2'>Layered Architectures</h3>
                            </div>
                    </div>

                {/* <div className='mainSkillContainer'></div> */}

            </div>

        </div>
    )
}
