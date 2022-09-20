import React from 'react'
import './loadingspinner.css'

function Loadingspinner(props:{size:'Big'|'Medium'|'Small'}) {
  return (
    <div className='spinnerwrapper'>
        <div className={(props && props.size)?'spinner '+props.size+'spinner':'spinner Mediumspinner'}></div>
    </div>
  )
}

export default Loadingspinner