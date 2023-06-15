import React from 'react'
import './Style.css'

export const MainPage = () => {
  return (
    <div>

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
        <div className='homeImg'>
            <div className='home'></div>
        </div>
        <div className='about'>
            <h1 className='title' id='aboutTitle'>ABOUT ME</h1>
        </div>
        <div className='resume'>
            <h1 className='title' id='resumeTitle'>SAMMARY</h1>
        </div>

    </div>
  )
}
