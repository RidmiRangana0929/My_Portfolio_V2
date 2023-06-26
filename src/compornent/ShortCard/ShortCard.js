import React from 'react'
import './ShortCardStyle.css'

export default function ShortCard (props) {
  return (
    <div className='mainContainer2' id={props.id}>
        <div className='cardBanner2'>
            <h3 className='cardHeader2'>{props.cardHeader}</h3>
            <a className='anchorTag2' href={props.url}>View Project</a>
        </div>
    </div>
  )
}