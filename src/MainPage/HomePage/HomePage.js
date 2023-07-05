import React from 'react'
import Typewriter from 'typewriter-effect';
import './HomeStyle.css'

export const HomePage = () => {
  return (
      <div id='home' className='homeImg'>
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
  )
}
