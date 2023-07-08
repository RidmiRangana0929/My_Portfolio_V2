import React from 'react'
import TextField from '@mui/material/TextField';
import './ContactStyle.css'

export const ContactPage = () => {
    return (
        <div id='contact' className='contact'>
            <div className='headerContainer'>
                <h1 className='header' id='resumeTitle'>CONTACTS</h1>
                <h2 data-aos="zoom-in" data-aos-duration="2000" className='subHeader'>Get in Touch</h2>
                <div className='underline'></div>
            </div>
            <div className='contactContainer1'>
                <div className='addressBox'>
                    <div id='addressImg'></div>
                    <p id='contactAddress'>
                        No. 18,<br></br><br></br>
                        Sebastian Road,<br></br><br></br>
                        Katukurunda,<br></br><br></br>
                        Kalutara,<br></br><br></br>
                        Sri Lanka.
                    </p>
                </div>
                <div className='emailBox'>
                    <div id='emailImg'></div>
                    <a href='' style={{ color: '#6f7379' }}><p id='contactEmail'>ridmirangana1429@gmail.com</p></a>

                </div>
                <div className='phoneBox'>
                    <div id='phoneImg'></div>
                    <p id='contactPhone'>(+94) 70 327 4953</p>
                </div>
            </div>
            <div className='contactContainer2'>
                <TextField
                    className='textField'
                    id="name"
                    label="Full Name"
                    variant="outlined" />
                <TextField
                    className='textField'
                    id="email" label="Email"
                    variant="outlined"
                />
                <TextField
                    className='textField'
                    id="message"
                    label="Message"
                    multiline
                    rows={6}
                />
                <button className='button' id='send'>Send</button>
            </div>
        </div>
    )
}
