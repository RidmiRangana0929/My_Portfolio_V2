import React from 'react'
import './ServiceBoxStyle.css'

export default function ServiceBox (props) {
  return (
    <div id='mainContainer'>
        <div className='serviceImg' id={props.id}></div>
        <h2 className='serviceTitle'>{props.serviceTitle}</h2>
        <a className='serviceSeeMore' href=''>See More</a>
        <p className='serviceInfo'>{props.serviceInfo}</p>
    </div>
  )
}
