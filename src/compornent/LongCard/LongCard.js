import React from 'react'
import './LongCardStyle.css'

export default function LongCard (props) {
  return (
    <div className='mainContainer1' id={props.id}>
        <div className='cardBanner'>
            <h3 className='cardHeader'>{props.cardHeader}</h3>
            <h4 className='viewProject'>View Project</h4>
        </div>
    </div>
  )
}
