import React from 'react'
import Typewriter from 'typewriter-effect';
import './Style.css'



export const MainPage = () => {
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
                        <div className='personalDetailsGrid' id='personalDetailsGrid1'>
                            <div className='title'><h3 id='nameTitle'>Full Name</h3></div>
                            <div className='details'><h3 id='name'>Sinhara Ridmi Rangana Silva</h3></div>
                        </div>
                        <div className='personalDetailsGrid' id='personalDetailsGrid2'>
                            <div className='title'><h3 id='birthdayTitle'>Birthday</h3></div>
                            <div className='details'><h3 id='birthday'>29/09/2000</h3></div>
                        </div>
                        <div className='personalDetailsGrid' id='personalDetailsGrid3'>
                            <div className='title'><h3 id='emailTitle'>Email</h3></div>
                            <div className='details'><h3 id='email'>ridmirangana1429@gmail.com</h3></div>
                        </div>
                        <div className='personalDetailsGrid' id='personalDetailsGrid4'>
                            <div className='title'><h3 id='phoneTitle'>Phone</h3></div>
                            <div className='details'><h3 id='phone'>+94 (70) 327 4953</h3></div>
                        </div>
                        <div className='personalDetailsGrid'>
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
                        <h1 className='count'>2+</h1>
                        <h4 className='info'>Years Experience</h4>
                    </div>
                    <div id='projects'>
                        <h1 className='count'>8+</h1>
                        <h4 className='info'>Projects Done</h4>
                    </div>
                    <div id='clients'>
                        <h1 className='count'>0+</h1>
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
        </div>

    </div>
  )
}
