import React from 'react'
import './DetailBoxStyle.css'

export default function DetailBox (props) {
  return (
    <div className='dBox'>
        <h3 className='qualification'>{props.qualification}</h3>
        <div className='logo' id={props.id}></div>
        <h3 className='institute'>{props.institute}</h3>
        <h3 className='location'>{props.location}</h3>
    </div>
  )
}
