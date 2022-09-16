import React from 'react'
import { FilmitemType } from '../../types/filmitem'
import Loadingspinner from '../loadingspinner/loadingspinner'
import './dropdownitem.css'
function Dropdownitem(props:{item:FilmitemType|undefined}) {
    if(!props || !props.item){
        return (<div className='item-wrapper loading-container'><Loadingspinner size='Medium'/></div>)
    }
  return (
    <div className='item-wrapper'>
        <div className='picture'>
            {/* <img alt={props.item.title}/> */}
        </div>
        <div className='flex column'>
            <h5>{props.item.title}</h5>
            <p>{props.item.releaseJahr}</p>
        </div>
    </div>
  )
}

export default Dropdownitem