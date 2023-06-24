import React from 'react'
import './ShortCardStyle.css'

export default function ShortCard (props) {
  return (
    <div className='mainContainer2' id={props.id}>
        <div className='cardBanner2'>
            <h3 className='cardHeader2'>{props.cardHeader}</h3>
            <h4 className='viewProject2'>View Project</h4>
        </div>
    </div>
  )
}