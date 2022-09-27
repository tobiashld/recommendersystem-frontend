import React, { Ref } from 'react'
import { FilmitemType, FilmitemTypeBewertet } from '../../types/filmitem'
import Dropdownitem from '../dropdownitem/dropdownitem'
import './dropdown.css'

function Dropdown(props:{items:FilmitemTypeBewertet[]|undefined,onItemClick:((item:FilmitemTypeBewertet|undefined)=>void)|undefined}) {
  if(!props || !props.items){
    return (
      <div className='dropdown-container show'>
        <Dropdownitem item={undefined} />
      </div>
    )
  }
  return (
    <div className='dropdown-container' >
      {props.items.map((item:FilmitemTypeBewertet,index)=><Dropdownitem key={index} item={item} onChoice={props.onItemClick}/>)}
    </div>
  )
}

export default Dropdown