import React from 'react'
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
            <div className='home'></div>
        </div>


        {/* about page... */}

        <div className='about'>
            <div className='titleContainer'>
                <h1 className='title' id='aboutTitle'>ABOUT ME</h1>
                <h2 className='subTitle'>Know Me More</h2>
                <div className='underline'></div>
            </div>

            <div id='aboutPageLayout'>
                <div id='greeting'>
                    <h3 id='greetingPart1'>I'm</h3> <h3 id='greetingPart2'>Ridmi Silva</h3> <h3 id='greetingPart3'>,</h3>
                </div>
                <div id='distription'>
                    <div id='paragraph'></div>
                    <div id='personalDetails'>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div id='caculation'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>


        {/* resume page... */}

        <div className='resume'>
            <div className='titleContainer'>
                <h1 className='title' id='resumeTitle'>SAMMARY</h1>
                <h2 className='subTitle'>Resume</h2>
                <div className='underline'></div>
            </div>
        </div>

    </div>
  )
}
