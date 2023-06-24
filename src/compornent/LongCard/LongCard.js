import React from 'react'
import './LongCardStyle.css'

export default function LongCard (props) {
  return (
    <div className='mainContainer1' id={props.id}>
        <div className='cardBanner1'>
            <h3 className='cardHeader1'>{props.cardHeader}</h3>
            <h4 className='viewProject1'>View Project</h4>
        </div>
    </div>
  )
}
